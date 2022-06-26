import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
import { HomePageComponent } from './commonCompos/home-page/home-page.component';
import { ContactUsComponent } from './commonCompos/contact-us/contact-us.component';
import { LoginComponent } from './commonCompos/login/login.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { DoPaiementComponent } from './client-module/client-module-components/client-payment-components/do-paiement/do-paiement.component';
import { PageUnauthorizedComponent } from './commonCompos/page-unauthorized/page-unauthorized.component';
import { NewCodeComponent } from './commonCompos/new-code/new-code.component';
import { VerifyCodeComponent } from './commonCompos/verify-code/verify-code.component';
import { ForgetPasswordComponent } from './commonCompos/forget-password/forget-password.component';
import { PaymentAddComponent } from './client-module/client-module-components/client-payment-components/payment-add/payment-add.component';
import { AuthGuard } from './commonServices/authGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'contactUs', component: ContactUsComponent },
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
    canActivate: [AuthGuard],
    data: { roles: 'ROLE_Agent' },
  },
  {
    path: 'backOffice',
    loadChildren: () =>
      import('./back-office-module/back-office-module.module').then(
        (m) => m.BackOfficeModuleModule
      ),
    canActivate: [AuthGuard],
    data: { roles: 'ROLE_Backoffice' },
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client-module/client-module.module').then(
        (m) => m.ClientModuleModule
      ),
    canActivate: [AuthGuard],
    data: { roles: 'ROLE_Client' },
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
