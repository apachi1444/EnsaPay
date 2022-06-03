import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeModuleRoutingModule } from './back-office-module-routing.module';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';


@NgModule({
  declarations: [
    ListServicesComponent
  ],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule
  ]
})
export class BackOfficeModuleModule { }
