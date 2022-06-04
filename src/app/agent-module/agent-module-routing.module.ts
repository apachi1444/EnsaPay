import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './agent-components/add-client/add-client.component';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';

const routes: Routes = [
  { path: 'agentDashboard', component: AgentDashbordComponent },
  { path: 'addClient', component: AddClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
