import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    HeaderComponent,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
