import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PaiementSlectComponent } from './client-module-components/paiement-slect/paiement-slect.component';
import { PaiementStepperComponent } from './client-module-components/paiement-stepper/paiement-stepper.component';
import { PaiementParReferenceComponent } from './client-module-components/paiement-par-reference/paiement-par-reference.component';
import { FactureComponent } from './client-module-components/facture/facture.component';
import { FacturePaiementComponent } from './client-module-components/facture-paiement/facture-paiement.component';
import { DoPaiementComponent } from './client-module-components/do-paiement/do-paiement.component';
import { PaiementProviderComponent } from './client-module-components/paiement-provider/paiement-provider.component';

@NgModule({
  declarations: [
    FacturePaiementComponent,
    FactureComponent,
    PaiementParReferenceComponent,
    PaiementStepperComponent,
    PaiementSlectComponent,
    DoPaiementComponent,
    PaiementProviderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ClientModuleRoutingModule,
  ],
})
export class ClientModuleModule {}
