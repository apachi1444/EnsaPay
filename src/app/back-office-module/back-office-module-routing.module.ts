import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from '../commonCompos/forget-password/forget-password.component';
import { ProfileComponent } from './back-office-components/profile/profile.component';
import { VerifyCodeComponent } from '../commonCompos/verify-code/verify-code.component';
import { AuthGuard } from '../commonServices/authGuard/auth.guard';

const routes: Routes = [
  {
    path: 'VerifyCode',
    component: VerifyCodeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'addAgent', component: AddAgentComponent, canActivate: [AuthGuard] },
  {
    path: 'listServices',
    component: ListServicesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeModuleRoutingModule {}
