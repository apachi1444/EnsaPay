import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeModuleRoutingModule } from './back-office-module-routing.module';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from './back-office-components/profile/forget-password/forget-password.component';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyCodeComponent } from './back-office-components/profile/verify-code/verify-code.component';
import { NewCodeComponent } from './back-office-components/profile/new-code/new-code.component';

@NgModule({
  declarations: [
    ListServicesComponent,
    ForgetPasswordComponent,
    AddAgentComponent,
    VerifyCodeComponent,
    NewCodeComponent
  ],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackOfficeModuleModule { }
