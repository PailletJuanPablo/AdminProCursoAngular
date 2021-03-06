import { GraficodonaComponent } from './../components/graficodona/graficodona.component';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms';
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({

  declarations: [
   DashboardComponent,
   ProgressComponent,
   Graficas1Component,
   PagesComponent,
   IncrementadorComponent,
   GraficodonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]


})

export class PagesModule {}
