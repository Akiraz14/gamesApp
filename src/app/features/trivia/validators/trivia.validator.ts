import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class TriviaValidator {
  
  difficultyValidator = (): ValidatorFn => {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (
        !formGroup.get('difficultyEasy')?.value
        && !formGroup.get('difficultyMedium')?.value
        && !formGroup.get('difficultyHard')?.value
        && !formGroup.get('difficultyAll')?.value
      ) {
        return {
          missingDifficulty: true,
        }
      }
      
      return null;
    }
  }
}

