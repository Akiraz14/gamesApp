import { Component } from '@angular/core';

import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
