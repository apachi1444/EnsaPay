import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashbordComponent } from '../agent/agent-dashbord/agent-dashbord.component';

const routes: Routes = [
  { path: 'agentdashe', component: AgentDashbordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentModuleRoutingModule {}
