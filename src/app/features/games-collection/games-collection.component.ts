import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

//thrid-party
import { TranslocoModule } from '@ngneat/transloco';

import { GameInfo } from '@core/models';

@Component({
  selector: 'games-collection',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    //thrid-party
    TranslocoModule,
  ],
  templateUrl: './games-collection.component.html',
  styleUrl: './games-collection.component.scss'
})
export class GamesCollectionComponent {

  public gamesInfo: GameInfo[] = [
    {
      name: 'findSame',
      route: '/games/find-same',
      imgUrl: './assets/images/games/find-same.jpg',
    },
    {
      name: 'trivia',
      route: '/games/trivia',
      imgUrl: './assets/images/games/trivia.jpg',
    },
  ];

}
