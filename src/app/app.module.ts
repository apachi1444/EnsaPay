import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { HeaderComponent } from './commonCompos/header/header.component';
import { FooterComponent } from './commonCompos/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruteurLoginComponent } from './oldDesign/recruteur-login/recruteur-login.component';
import { SponsorsComponent } from './commonCompos/sponsors/sponsors.component';
import { AgentModuleModule } from './agent-module/agent-module.module';
import { ClientModuleModule } from './client-module/client-module.module';
import { BackOfficeModuleModule } from './back-office-module/back-office-module.module';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
import { LoginComponent } from './commonCompos/login/login.component';
import { AgentDashbordComponent } from './agent-module/agent-components/agent-dashbord/agent-dashbord.component';
import { AgentPaginationComponent } from './agent-module/agent-components/agent-pagination/agent-pagination.component';
import { ChangePasswordModalComponent } from './agent-module/agent-components/agent-dashbord/change-password-modal/change-password-modal.component';
import { BackOfficeService } from './back-office-module/back-office-services/backoffice-service.service';
import { AgentServiceService } from './agent-module/agent-services/agent-service.service';
import { HomePageComponent } from './commonCompos/home-page/home-page.component';
import { ContactUsComponent } from './commonCompos/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    RecruteurLoginComponent,
    AgentDashbordComponent,
    SponsorsComponent,
    AgentPaginationComponent,
    ChangePasswordModalComponent,
    AboutUsComponent,
    LoginComponent,
    HomePageComponent,
    ContactUsComponent,
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
  providers: [BackOfficeService, AgentServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
