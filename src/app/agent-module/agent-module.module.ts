import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentModuleRoutingModule } from './agent-module-routing.module';
import { AddClientComponent } from './agent-components/add-client/add-client.component';

@NgModule({
  declarations: [
    AddClientComponent
  ],
  imports: [CommonModule, AgentModuleRoutingModule],
})
export class AgentModuleModule {}
