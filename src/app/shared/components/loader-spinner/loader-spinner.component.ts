import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'shared-loader-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader-spinner.component.html',
  styleUrl: './loader-spinner.component.scss'
})
export class LoaderSpinnerComponent {

  @Input()
  public isVisible: boolean = false;

}
