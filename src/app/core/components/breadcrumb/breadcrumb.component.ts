import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

//thrid-party
import { TranslocoModule } from '@ngneat/transloco';

import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { Breadcrumb } from '@core/models';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    //thrid-party
    TranslocoModule,
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  private readonly breadcrumbService = inject(BreadcrumbService);

  breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbService.breadcrumbs$;
  
}
