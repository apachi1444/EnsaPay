import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';


@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientModuleRoutingModule
  ]
})
export class ClientModuleModule { }
