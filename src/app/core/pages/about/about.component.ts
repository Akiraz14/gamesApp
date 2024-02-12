import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
