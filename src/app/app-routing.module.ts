import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SigninpageComponent } from './backOffice/signinpage/signinpage.component';
import { SignUpPageComponent } from './backOffice/sign-up-page/sign-up-page.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { ProfileComponent } from './backOffice/profile/profile.component';
import { RecruteurLoginComponent } from './agent/recruteur-login/recruteur-login.component';
import { AgentDashbordComponent } from './agent/agent-dashbord/agent-dashbord.component';
import { ClientModuleModule } from './client-module/client-module.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'backOffice/registerAgent', component: SignUpPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: RecruteurLoginComponent },
  { path: 'agent/agentdash', component: AgentDashbordComponent },
  {
    path: 'comment',
    loadChildren: () =>
      import('./comment/comment.module').then((m) => m.CommentModule),
  },
  { path: '**', component: PageNotFoundComponent },
  {
    path: 'agent',
    loadChildren: () =>
      import('./agent-module/agent-module.module').then(
        (m) => m.AgentModuleModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
