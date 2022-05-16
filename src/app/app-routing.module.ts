import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SigninpageComponent } from './backOffice/signinpage/signinpage.component';
import { SignUpPageComponent } from './backOffice/sign-up-page/sign-up-page.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { ProfileComponent } from './backOffice/profile/profile.component';
import { RecruteurInscrComponent } from './agent/recruteur-inscr/recruteur-inscr.component';
import { RecruteurLoginComponent } from './agent/recruteur-login/recruteur-login.component';

const routes: Routes = [
  { path: '', component: SigninpageComponent },
  { path: 'login', component: SigninpageComponent },
  { path: 'register', component: SignUpPageComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'registerAgent',component:RecruteurInscrComponent},
  {path:'loginAgent',component:RecruteurLoginComponent},
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  

  
];
