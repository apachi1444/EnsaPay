import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentModuleRoutingModule } from './agent-module-routing.module';
import { AddClientComponent } from './agent-components/add-client/add-client.component';
import { AgentDashbordComponent } from './agent-components/agent-dashbord/agent-dashbord.component';
import { NgToastModule } from 'ng-angular-popup';
import { MyclientsComponent } from './agent-components/agent-dashbord/myclients/myclients.component';
@NgModule({
  declarations: [AddClientComponent, AgentDashbordComponent, MyclientsComponent],
  imports: [
    CommonModule,
    AgentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
  ],
})
export class AgentModuleModule {}
