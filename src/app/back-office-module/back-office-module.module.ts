import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeModuleRoutingModule } from './back-office-module-routing.module';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from './back-office-components/profile/forget-password/forget-password.component';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';


@NgModule({
  declarations: [
    ListServicesComponent,
    ForgetPasswordComponent,
    AddAgentComponent
  ],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule
  ]
})
export class BackOfficeModuleModule { }
