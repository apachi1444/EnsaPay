import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
<<<<<<< HEAD
import { HomePageComponent } from './commonCompos/home-page/home-page.component';
=======
import { ContactUsComponent } from './commonCompos/contact-us/contact-us.component';
>>>>>>> 2dcab2db9a4d47ca5b20d8a9f8e70d1823acfdb6
import { LoginComponent } from './commonCompos/login/login.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
<<<<<<< HEAD
  { path: 'home-page', component: HomePageComponent },
=======
  { path: 'contactUs', component: ContactUsComponent },
>>>>>>> 2dcab2db9a4d47ca5b20d8a9f8e70d1823acfdb6
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
