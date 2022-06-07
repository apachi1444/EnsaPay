import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from '../agent-module/agent-components/add-client/add-client.component';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';
import { PaiementStepperComponent } from './client-module-components/paiement-stepper/paiement-stepper.component';
// import { DoPaiementComponent } from './client-module-components/do-paiement/do-paiement.component';

const routes: Routes = [
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: 'addPayment', component: PaiementStepperComponent },
  // { path: 'doPayment', component: DoPaiementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientModuleRoutingModule {}
