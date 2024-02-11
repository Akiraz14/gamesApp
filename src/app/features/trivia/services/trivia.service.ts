import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environment } from '@env';
import { Answer, EvaluationResult, QuestionModel, QuestionParameters, SimpleQuestion } from '../models';

@Injectable({ providedIn: 'root' })
export class TriviaService {
  
  private http = inject(HttpClient);
  
  private readonly apiUrl: string = environment.triviaApiUrl;
  
  private _currentTrivia: QuestionModel[] = [];
  private _currentAnswers: Answer[] = [];

  generateQuestionary(qParams: QuestionParameters): Observable<boolean> {
    let url = `${this.apiUrl}/questions?limit=${qParams.limit}`;
    url += (!qParams.categories) ? '' : `&categories=${qParams.categories}`;
    url += (!qParams.difficulties) ? '' : `&difficulties=${qParams.difficulties}`;

    return this.http.get<QuestionModel[]>(url)
    .pipe(
      tap(questionary => this._currentTrivia = questionary),
      map(() => true),
      catchError((err) => {
        console.error(err);
        return of(false);
      }),
    );
  }

  getQuestionary(): SimpleQuestion[] {
    this._currentAnswers = [];
    if (this._currentTrivia.length === 0) { return []; }

    const shuffle = (array: string[]) => {
      return array.sort(() => Math.random() - 0.5); 
    };
    console.log(this._currentTrivia);
    return this._currentTrivia.map(q => ({
      id: q.id,
      category: q.category,
      question: q.question.text,
      difficulty: q.difficulty,
      possibleAnswers: shuffle([ ...q.incorrectAnswers, q.correctAnswer ]),
    }));
  }

  evaluateQuestionary(answers: Answer[]): EvaluationResult {
    const evaluationResult: EvaluationResult = {
      isCorrect: false,
      totalAnswers: answers.length,
      totalMistakes: 0,
    }

    answers.forEach((answ) => {
      const question = this._currentTrivia.find(q => q.id === answ.id);
      if (!question) return;

      this._currentAnswers.push({
        isCorrect: (question?.correctAnswer === answ.answer),
        ...answ,
      });

      evaluationResult.totalMistakes += (question?.correctAnswer === answ.answer) ? 0 : 1;
    });
    evaluationResult.isCorrect = (evaluationResult.totalMistakes === 0);

    return evaluationResult;
  }

  getEvaluation(): Answer[] {
    return [...this._currentAnswers];
  }
  
}
