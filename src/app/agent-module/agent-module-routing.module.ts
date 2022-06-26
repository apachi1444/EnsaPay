import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from '../commonCompos/forget-password/forget-password.component';
import { AuthGuard } from '../commonServices/authGuard/auth.guard';
import { AddClientComponent } from './agent-components/add-client/add-client.component';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';
import { VerifyCodeComponent } from '../commonCompos/verify-code/verify-code.component';
import { NewCodeComponent } from '../commonCompos/new-code/new-code.component';
const routes: Routes = [
  {
    path: 'addClient',
    component: AddClientComponent,
  },
  {
    path: 'profile',
    component: AgentDashbordComponent,
  },
  { path: 'newPassword/:username', component: NewCodeComponent },
  { path: 'VerifyCode/:username', component: VerifyCodeComponent },

  { path: 'addClient', component: AddClientComponent },
  { path: 'profile', component: AgentDashbordComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
