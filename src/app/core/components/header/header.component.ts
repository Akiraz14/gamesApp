import { Component } from '@angular/core';

import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ThemeMenuComponent } from '../theme-menu/theme-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LanguageMenuComponent,
    SideMenuComponent,
    ThemeMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
