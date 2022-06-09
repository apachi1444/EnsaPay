import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
import { HomePageComponent } from './commonCompos/home-page/home-page.component';
import { ContactUsComponent } from './commonCompos/contact-us/contact-us.component';
import { LoginComponent } from './commonCompos/login/login.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { PaiementStepperComponent } from './client-module/client-module-components/paiement-stepper/paiement-stepper.component';
import { DoPaiementComponent } from './client-module/client-module-components/do-paiement/do-paiement.component';
import { PageUnauthorizedComponent } from './commonCompos/page-unauthorized/page-unauthorized.component';
import { NewCodeComponent } from './commonCompos/new-code/new-code.component';
import { VerifyCodeComponent } from './commonCompos/verify-code/verify-code.component';
import { ForgetPasswordComponent } from './commonCompos/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'addPayment', component: PaiementStepperComponent },
  { path: 'unauthorized', component: PageUnauthorizedComponent },
  { path: 'new-password', component: NewCodeComponent },
  { path: 'verify-code', component: VerifyCodeComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: 'agent',
    loadChildren: () =>
      import('./agent-module/agent-module.module').then(
        (m) => m.AgentModuleModule
      ),
  },
  {
    path: 'backOffice',
    loadChildren: () =>
      import('./back-office-module/back-office-module.module').then(
        (m) => m.BackOfficeModuleModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client-module/client-module.module').then(
        (m) => m.ClientModuleModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
