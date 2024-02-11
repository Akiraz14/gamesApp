import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { FindSameService } from '../../services/find-same.service';

@Component({
  selector: 'find-same-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    //third-party
    TranslocoModule,
  ],
  templateUrl: './create-find-same.component.html',
  styleUrl: './create-find-same.component.scss'
})
export class CreateFindSameComponent {


  private fb = inject(FormBuilder);
  private findSameService = inject(FindSameService);

  @Output('isCreated')
  public isCreatedEvent = new EventEmitter<boolean>();
  
  @Output('pairs')
  public pairsEvent = new EventEmitter<number>();

  private readonly minPairs = 12;
  private readonly maxPairs = 48;

  public findSameForm: FormGroup = this.fb.group({
    pairsNumber: [20, [Validators.min(this.minPairs), Validators.max(this.maxPairs)]],
  });

  changePairsNumber(qty: number): void {
    const newValue = this.findSameForm.get('pairsNumber')?.value + (qty*4);
    if ((newValue) < this.minPairs || newValue > this.maxPairs) { return; }
    
    this.findSameForm.get('pairsNumber')?.setValue(newValue);
  }

  onRestart(): void {
    this.findSameForm.enable();
    this.isCreatedEvent.emit(false);
    this.pairsEvent.emit(0);
  }
  
  onSubmit(): void {
    if (this.findSameForm.invalid) { return; }

    this.findSameForm.disable();
    
    const pairs = this.findSameForm.get('pairsNumber')?.value;
    if (this.findSameService.createBoard(pairs)) {
      this.isCreatedEvent.emit(true);
      this.pairsEvent.emit(pairs);
    }
  }
  
}
