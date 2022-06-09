import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeModuleRoutingModule } from './back-office-module-routing.module';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from '../commonCompos/forget-password/forget-password.component';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyCodeComponent } from '../commonCompos/verify-code/verify-code.component';
import { NewCodeComponent } from '../commonCompos/new-code/new-code.component';

@NgModule({
  declarations: [ListServicesComponent, AddAgentComponent],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BackOfficeModuleModule {}
