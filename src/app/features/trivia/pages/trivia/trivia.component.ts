import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { CreateTriviaComponent } from '../../components/create-trivia/create-trivia.component';
import { QuestionaryComponent } from '../../components/questionary/questionary.component';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [
    CommonModule,
    CreateTriviaComponent,
    QuestionaryComponent,
    
    //third-party
    TranslocoModule,
  ],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.scss'
})
export class TriviaComponent {

  public isCreated = signal(false);
  public fullDescription: boolean = false;

  onCreatedTrivia(created: boolean) {
    this.isCreated.set(created);
  }
}
