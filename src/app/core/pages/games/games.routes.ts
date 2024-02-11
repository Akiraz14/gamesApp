import { Routes } from "@angular/router";

import { GamesCollectionComponent } from "@features/games-collection/games-collection.component";

export const GAMES_ROUTES: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Collection' },
    component: GamesCollectionComponent,
  },
  {
    path: 'trivia',
    data: { breadcrumb: 'Trivia' },
    loadComponent: () => import('@features/trivia/pages/trivia/trivia.component')
      .then(c => c.TriviaComponent),
  },
  {
    path: 'find-same',
    data: { breadcrumb: 'Find the same' },
    loadComponent: () => import('@features/find-same/pages/find-same/find-same.component')
      .then(c => c.FindSameComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];