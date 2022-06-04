import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './back-office-components/add-agent/add-agent.component';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ForgetPasswordComponent } from './back-office-components/profile/forget-password/forget-password.component';
import { ProfileComponent } from './back-office-components/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'addAgent', component: AddAgentComponent },
  { path: 'listServices', component: ListServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeModuleRoutingModule {}
