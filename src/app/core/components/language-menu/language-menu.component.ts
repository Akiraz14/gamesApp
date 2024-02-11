import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//thrid-party
import { TranslocoService } from '@ngneat/transloco';

import { Language } from '@core/models';

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss'
})
export class LanguageMenuComponent {

  private translocoService = inject(TranslocoService);

  public languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
      imgUrl: 'assets/images/languages/en.png',
    },
    {
      code: 'es',
      name: 'Spanish',
      shorthand: 'SPA',
      imgUrl: 'assets/images/languages/es.png',
    },
  ];
  
  private _currentLanguage = signal<Language>(this.languages[0]);
  public currentLanguage = computed(() => this._currentLanguage());

  ngOnInit(): void {
    const code = document.documentElement.getAttribute('lang') || 'en';
    this.changeLanguage(code);
  }

  changeLanguage(code: string): void {
    if (code === 'en') this._currentLanguage.set(this.languages[0]);
    if (code === 'es') this._currentLanguage.set(this.languages[1]);

    this.translocoService.setActiveLang(code);
    document.documentElement.setAttribute('lang', code);
  }

}
