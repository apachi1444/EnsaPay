import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashbordComponent } from '../agent-module/agent-components/agent-dashbord/agent-dashbord.component';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';

const routes: Routes = [
  { path: 'profile', component: AgentDashbordComponent },
  { path: 'client/dashboard', component: ClientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientModuleRoutingModule {}
