import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { HeaderComponent } from './commonCompos/header/header.component';
import { FooterComponent } from './commonCompos/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SponsorsComponent } from './commonCompos/sponsors/sponsors.component';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
import { LoginComponent } from './commonCompos/login/login.component';
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
    SponsorsComponent,
    AboutUsComponent,
    LoginComponent,
    HomePageComponent,
    ContactUsComponent,
  ],
  imports: [
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
