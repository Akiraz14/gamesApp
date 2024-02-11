import { Routes } from '@angular/router';

import { HomeComponent } from '@core/pages/home/home.component';
import { GamesComponent } from '@core/pages/games/games.component';

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    component: HomeComponent
  },
  {
    path: 'games',
    data: { breadcrumb: 'Games' },
    component: GamesComponent,
    loadChildren: () => import('@core/pages/games/games.routes')
      .then(r => r.GAMES_ROUTES),
  },
  {
    path: 'about',
    data: { breadcrumb: 'About' },
    loadComponent: () => import('@core/pages/about/about.component')
      .then(c => c.AboutComponent),
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];
