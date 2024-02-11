import { Component, Input, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

//third-party
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import Swal from 'sweetalert2';

import { FindSameService } from '../../services/find-same.service';
import { TimerComponent } from '@app/shared/components';
import { Card } from '../../models';

@Component({
  selector: 'find-same-board',
  standalone: true,
  imports: [
    CommonModule,

    //third-party
    TranslocoModule,

    TimerComponent,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  
  private translocoService = inject(TranslocoService);
  private findSameService = inject(FindSameService);

  @Input()
  public pairsNumber = 12;

  public active = true;
  public foundPairs = signal(0);

  private foundAll = effect(() => {
    if (this.foundPairs() === this.pairsNumber) {
      this.active = false;
      
      Swal.fire({
        icon: "success",
        title: this.translocoService.translate('findSame.messageCorrect.title'),
        text: this.translocoService.translate('findSame.messageCorrect.text'),
      });
    }
  });

  public board: Card[] = [];

  public firstCard: Card | null = null;
  public secondCard: Card | null = null;
  
  public imgUrlHidden: string = '';
  public colorStyle = ' color-1 ';

  ngOnInit(): void {
    if (this.pairsNumber === 0) throw new Error('Pairs number is required.');
    this.board = this.findSameService.board;

    const randomPokeball = this.randomNum(32);
    this.imgUrlHidden = `assets/images/find-same/pokeball-${randomPokeball}.png`;

    const randomColor = this.randomNum(9);
    this.colorStyle = ` color-${randomColor} `;
  }

  private randomNum(max: number): number { return Math.floor(Math.random()*max)+1; }

  flipCard(card: Card): void {
    if (card.isFlipped || this.secondCard) { return; }

    card.isFlipped = true;
    if (!this.firstCard) {
      this.firstCard = card;
      return;
    }
    
    this.secondCard = card;

    // Iguales
    if (this.firstCard.id === this.secondCard.id) {
      timer(1000).subscribe(() => {
        this.firstCard = this.secondCard = null;
        this.foundPairs.update(curr => curr+2);
      });
      return;
    }
    
    // Diferentes
    timer(2000).subscribe(() => {
      this.firstCard!.isFlipped = this.secondCard!.isFlipped = false;
      this.firstCard = this.secondCard = null;
    });
  }
  

}
