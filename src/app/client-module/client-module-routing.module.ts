import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashbordComponent } from '../agent-module/agent-components/agent-dashbord/agent-dashbord.component';

const routes: Routes = [{ path: 'profile', component: AgentDashbordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientModuleRoutingModule {}
