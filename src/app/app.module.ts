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
import { BackOfficeService } from './services/backOffice/backoffice-service.service';
import { RecuteurserviceComponent } from './services/agent/recuteurservice/recuteurservice.component';
import { RecruteurLoginComponent } from './agent/recruteur-login/recruteur-login.component';
import { AgentDashbordComponent } from './agent/agent-dashbord/agent-dashbord.component';
import { SponsorsComponent } from './commonCompos/sponsors/sponsors.component';
import { AgentPaginationComponent } from './agent/agent-pagination/agent-pagination.component';
import { HeaderGreenComponent } from './commonCompos/headerGreen/header-green/header-green.component';
import { ChangePasswordModalComponent } from './agent/agent-dashbord/change-password-modal/change-password-modal.component';
import { AgentModuleRoutingModule } from './agent-module/agent-module-routing.module';
import { ClientModuleRoutingModule } from './client-module/client-module-routing.module';
import { AgentModuleModule } from './agent-module/agent-module.module';
import { ClientModuleModule } from './client-module/client-module.module';
import { BackOfficeModuleModule } from './back-office-module/back-office-module.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    SigninpageComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    RecuteurserviceComponent,
    RecruteurLoginComponent,
    AgentDashbordComponent,
    SponsorsComponent,
    AgentPaginationComponent,
    HeaderGreenComponent,
    ChangePasswordModalComponent,
  ],
  imports: [
    BackOfficeModuleModule,
    ClientModuleModule,
    AgentModuleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BackOfficeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
