import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { SigninpageComponent } from './backOffice/signinpage/signinpage.component';
import { ProfileComponent } from './backOffice/profile/profile.component';
import { HeaderComponent } from './commonCompos/header/header.component';
import { FooterComponent } from './commonCompos/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackofficeServiceService } from './services/backOffice/backoffice-service.service';
import { RecruteurInscrComponent } from './agent/recruteur-inscr/recruteur-inscr.component';
import { RecuteurserviceComponent } from './services/agent/recuteurservice/recuteurservice.component';
import { RecruteurLoginComponent } from './agent/recruteur-login/recruteur-login.component';
import { AgentDashbordComponent } from './agent/agent-dashbord/agent-dashbord.component';

import { AgentPaginationComponent } from './agent/agent-pagination/agent-pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    SigninpageComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    RecruteurInscrComponent,
    RecuteurserviceComponent,
    RecruteurLoginComponent,
    AgentDashbordComponent,
   
    AgentPaginationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [BackofficeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
