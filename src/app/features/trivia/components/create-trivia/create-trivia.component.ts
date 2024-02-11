import { Component, EventEmitter, Output, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { TriviaService } from '../../services/trivia.service';
import { Category, Difficulty, QuestionParameters } from '../../models';
import { TriviaValidator } from '../../validators/trivia.validator';
import { LoaderSpinnerComponent } from '@shared/components';

@Component({
  selector: 'trivia-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderSpinnerComponent,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './create-trivia.component.html',
  styleUrl: './create-trivia.component.scss'
})
export class CreateTriviaComponent {

  private fb = inject(FormBuilder);
  private triviaService = inject(TriviaService);
  private triviaValidator = inject(TriviaValidator);
  
  @Output('isCreated')
  isCreatedEvent = new EventEmitter<boolean>();
  
  public readonly minQuestions = 5;
  public readonly maxQuestions = 50;
  public categories = Object.values(Category);

  public triviaForm: FormGroup = this.fb.group({
    category: [''],
    difficulties: this.fb.group({
      difficultyAll: [false],
      difficultyEasy: [false],
      difficultyMedium: [true],
      difficultyHard: [false],
    }, {
      validators: this.triviaValidator.difficultyValidator()
    }),
    questionsNumber: [10, [Validators.required, Validators.min(this.minQuestions), Validators.max(this.maxQuestions)]],
  });
  
  public difficultyEasy = signal(false);
  public difficultyMedium = signal(true);
  public difficultyHard = signal(false);
  public difficultyAll = computed(() => this.difficultyEasy() && this.difficultyMedium() && this.difficultyHard());
  private difficultiesEffect = effect(() => {
    if (!this.difficultyAll()) {
      this.triviaForm.get('difficulties.difficultyAll')?.reset(false);
    }
  });
  
  public currQuestionNum = signal(10);
  public isCreating = signal(false);

  changeDifficulty(type: 'easy' | 'medium' | 'hard'): void {
    switch (type) {
      case Difficulty.easy:
        return this.difficultyEasy.update(curr => !curr);
      case Difficulty.medium:
        return this.difficultyMedium.update(curr => !curr);
      case Difficulty.hard:
        return this.difficultyHard.update(curr => !curr);
    }
  }
  
  selectAllDifficulties(): void {
    const currValue = !this.difficultyAll();
    this.triviaForm.get('difficulties.difficultyAll')?.reset(currValue);

    this.difficultyEasy.set(currValue);
    this.triviaForm.get('difficulties.difficultyEasy')?.reset(currValue);
    this.difficultyMedium.set(currValue);
    this.triviaForm.get('difficulties.difficultyMedium')?.reset(currValue);
    this.difficultyHard.set(currValue);
    this.triviaForm.get('difficulties.difficultyHard')?.reset(currValue);
  }
  
  changeQuestionsNumber(qty: number): void {
    this.currQuestionNum.set(qty);
  }
  
  onSubmit() {
    this.isCreatedEvent.emit(false);
    if (this.triviaForm.invalid) { return; }

    
    const qParams: QuestionParameters = {
      limit: this.triviaForm.value.questionsNumber,
    };

    if (this.triviaForm.value.category.length > 0) {
      qParams.categories = this.triviaForm.value.category
    }
    
    if (!this.triviaForm.value.difficulties.difficultyAll) {
      const easy = this.triviaForm.value.difficulties.difficultyEasy;
      const medium = this.triviaForm.value.difficulties.difficultyMedium;
      const hard = this.triviaForm.value.difficulties.difficultyHard;
      let difficulties = ''; //All
      difficulties += (!easy) ? '' : 'easy,';
      difficulties += (!medium) ? '' : 'medium,';
      difficulties += (!hard) ? '' : 'hard,';
      difficulties = difficulties.slice(0,difficulties.length-1);

      qParams.difficulties = difficulties;
    }

    this.isCreating.set(true);
    this.triviaService.generateQuestionary(qParams)
    .subscribe(status => {
      this.isCreatedEvent.emit(status);
      this.isCreating.set(false);
    });

  }
  
}
