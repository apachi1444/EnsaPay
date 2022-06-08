import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from '../back-office-module/back-office-components/profile/forget-password/forget-password.component';
import { AddClientComponent } from './agent-components/add-client/add-client.component';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';

const routes: Routes = [
  { path: 'addClient', component: AddClientComponent },
  { path: 'profile', component: AgentDashbordComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
