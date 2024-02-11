import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BreadcrumbComponent } from '@core/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    RouterOutlet,

    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {


}
