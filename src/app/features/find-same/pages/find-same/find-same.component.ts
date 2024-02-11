import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { CreateFindSameComponent } from '../../components/create-find-same/create-find-same.component';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'games-find-same',
  standalone: true,
  imports: [
    CommonModule,
    BoardComponent,
    CreateFindSameComponent,

    //third-party
    TranslocoModule,
  ],
  templateUrl: './find-same.component.html',
  styleUrl: './find-same.component.scss'
})
export class FindSameComponent {
  
  public isCreated = false;
  public pairs = 0;

  public fullDescription: boolean = false;

  onCreated(created: boolean) {
    this.isCreated = created;
  }

  onPairsAssigned(qty: number): void {
    this.pairs = qty;
  }

}
