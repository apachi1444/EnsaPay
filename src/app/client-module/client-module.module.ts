import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientDashboardComponent } from './client-module-components/client-dashboard/client-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PaiementSlectComponent } from './client-module-components/client-payment-components/paiement-slect/paiement-slect.component';
import { PaiementParReferenceComponent } from './client-module-components/client-payment-components/paiement-par-reference/paiement-par-reference.component';
import { FactureComponent } from './client-module-components/client-payment-components/facture/facture.component';
import { FacturePaiementComponent } from './client-module-components/client-payment-components/facture-paiement/facture-paiement.component';
import { DoPaiementComponent } from './client-module-components/client-payment-components/do-paiement/do-paiement.component';
import { PaiementProviderComponent } from './client-module-components/client-payment-components/paiement-provider/paiement-provider.component';
import { PaymentAddComponent } from './client-module-components/client-payment-components/payment-add/payment-add.component';
import { HistoriqueClientComponent } from './client-module-components/historique-client/historique-client.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymentSmsComponent } from './client-module-components/client-payment-components/payment-sms/payment-sms.component'; 

@NgModule({
  declarations: [
    FacturePaiementComponent,
    FactureComponent,
    PaiementParReferenceComponent,
    PaiementSlectComponent,
    DoPaiementComponent,
    PaiementProviderComponent,
    PaymentAddComponent,
    ClientDashboardComponent,
    HistoriqueClientComponent,
    PaymentSmsComponent,
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    QRCodeModule,
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    ClientModuleRoutingModule,
    MatStepperModule,
    MatPaginatorModule
   
  ],
})
export class ClientModuleModule {}
