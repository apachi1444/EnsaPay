import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './commonCompos/page-not-found/page-not-found.component';
import { HeaderComponent } from './commonCompos/header/header.component';
import { FooterComponent } from './commonCompos/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SponsorsComponent } from './commonCompos/sponsors/sponsors.component';
import { AboutUsComponent } from './commonCompos/about-us/about-us.component';
import { LoginComponent } from './commonCompos/login/login.component';
import { BackOfficeService } from './back-office-module/back-office-services/backoffice-service.service';
import { AgentServiceService } from './agent-module/agent-services/agent-service.service';
import { HomePageComponent } from './commonCompos/home-page/home-page.component';
import { ContactUsComponent } from './commonCompos/contact-us/contact-us.component';
import { AuthGuard } from './commonServices/authGuard/auth.guard';
import { PageUnauthorizedComponent } from './commonCompos/page-unauthorized/page-unauthorized.component';
import { TokenInterceptorService } from './commonServices/token-service/token-interceptor.service';
import { LoginServiceService } from './commonServices/login-service/login-service.service';
import { NewCodeComponent } from './commonCompos/new-code/new-code.component';
import { ForgetPasswordComponent } from './commonCompos/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    PageUnauthorizedComponent,
    NewCodeComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    BackOfficeService,
    AgentServiceService,
    AuthGuard,
    LoginServiceService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
