import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeModuleRoutingModule } from './back-office-module-routing.module';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from '../commonCompos/forget-password/forget-password.component';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyCodeComponent } from '../commonCompos/verify-code/verify-code.component';
import { NewCodeComponent } from '../commonCompos/new-code/new-code.component';
import { ClientDashboardComponent } from '../client-module/client-module-components/client-dashboard/client-dashboard.component';
import { PaymentAddComponent } from '../client-module/client-module-components/client-payment-components/payment-add/payment-add.component';
import { ProfileComponent } from './back-office-components/profile/profile.component';
import { UiAddAgentComponent } from './back-office-components/profile/ui-add-agent/ui-add-agent.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AddAgentComponent, ProfileComponent, UiAddAgentComponent],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
})
export class BackOfficeModuleModule {}
