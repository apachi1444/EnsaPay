import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServicesComponent } from './back-office-components/list-services/list-services.component';
import { ProfileComponent } from './back-office-components/profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'listServices', component: ListServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeModuleRoutingModule {}
