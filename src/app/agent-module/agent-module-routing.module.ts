import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from '../back-office-module/back-office-components/profile/forget-password/forget-password.component';
import { AuthGuard } from '../commonServices/authGuard/auth.guard';
import { AddClientComponent } from './agent-components/add-client/add-client.component';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';
import { VerifyCodeComponent } from '../back-office-module/back-office-components/profile/verify-code/verify-code.component';
import { NewCodeComponent } from '../back-office-module/back-office-components/profile/new-code/new-code.component';
const routes: Routes = [
  {
    path: 'addClient',
    component: AddClientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: AgentDashbordComponent,
    canActivate: [AuthGuard],
  },
  { path: 'newPassword', component: NewCodeComponent },
  { path: 'VerifyCode', component: VerifyCodeComponent },
  { path: 'addClient', component: AddClientComponent },
  { path: 'profile', component: AgentDashbordComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
