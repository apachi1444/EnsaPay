import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';

const routes: Routes = [
  { path: 'agent/agentdashee', component: AgentDashbordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
