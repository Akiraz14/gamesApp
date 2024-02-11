import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//third-party
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import Swal from 'sweetalert2';

import { TriviaService } from '../../services/trivia.service';
import { Answer, EvaluationResult, SimpleQuestion } from '../../models';
import { TimerComponent } from '@shared/components';

@Component({
  selector: 'trivia-questionary',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    TimerComponent,

    //third-party
    TranslocoModule,
  ],
  templateUrl: './questionary.component.html',
  styleUrl: './questionary.component.scss'
})
export class QuestionaryComponent implements OnInit, OnDestroy {

  private translocoService = inject(TranslocoService);
  private triviaService = inject(TriviaService);

  public questionForm: FormGroup = new FormGroup({});;
  public questionary: SimpleQuestion[] = [];
  public result?: EvaluationResult;

  public attempts = signal(0);
  public activeTimer = false;

  ngOnInit(): void {
    this.questionary = this.triviaService.getQuestionary();
    this.createQuestionaryForm();
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  private startTimer() {
    this.activeTimer = true;
  }

  private pauseTimer() {
    this.activeTimer = false;
  }

  createQuestionaryForm(): void {
    this.questionForm = new FormGroup({});

    if (this.questionary.length === 0) { return; }

    this.questionary.forEach((q, i) => {
      this.questionForm?.addControl(`Q${i}`, new FormControl('', Validators.required));
    });

    this.startTimer();
  }

  getCurrentAnswers(): Answer[] {
    const answers: Answer[] = [];
    this.questionary.forEach((q, i) => {
      answers.push({
        id: q.id,
        answer: this.questionForm.get(`Q${i}`)?.value,
      });
    });

    return answers;
  }

  onSubmit() {
    if (this.questionForm.invalid) { return; }

    this.pauseTimer();

    Swal.fire({
      title: this.translocoService.translate('trivia.messageConfirm.title'),
      text: (this.attempts() < 2)
        ? this.translocoService.translate('trivia.messageConfirm.text', { remainingAttempts: (3 - this.attempts()) })
        : this.translocoService.translate('trivia.messageConfirm.textLast'),
      icon: "question",
      confirmButtonColor: "#3085d6",
      confirmButtonText: this.translocoService.translate('trivia.messageConfirm.accept'),
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: this.translocoService.translate('trivia.messageConfirm.cancel'),
    }).then((result) => {
      if (!result.isConfirmed) {
        this.startTimer();
      }
      else {
        const answers = this.getCurrentAnswers();
        this.attempts.update(att => att + 1);
        const result: EvaluationResult = this.triviaService.evaluateQuestionary([...answers]);

        if (this.attempts() === 3) {
          this.questionForm.setErrors({ outOfAttempts: true });
        }

        this.showEvaluationResult(result);
      }
    });

  }

  showEvaluationResult(result: EvaluationResult) {
    this.result = result;
    Swal.fire(
      (result.isCorrect) ? {
        title: this.translocoService.translate('trivia.messageCorrect.title'),
        text: this.translocoService.translate('trivia.messageCorrect.text'),
        icon: "success"
      } : {
        title: this.translocoService.translate('trivia.messageIncorrect.title'),
        text: this.translocoService.translate('trivia.messageIncorrect.text'),
        icon: "error"
      }).then(() => {
        if (!result.isCorrect && this.attempts() < 3) {
          this.startTimer();
        }
        else if (result.isCorrect) {
          this.questionForm.disable();
        }
      }
      );
  }

}
