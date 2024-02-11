import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

//thrid-party
import { TranslocoModule } from '@ngneat/transloco';

import { MenuItem } from '@core/models';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    
    //thrid-party
    TranslocoModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { title: 'home', route: '/home' },
    { title: 'games', route: '/games' },
    { title: 'about', route: '/about' },
  ];

}
