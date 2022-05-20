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
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
// import { BackofficeServiceService } from './services/backOffice/backoffice-service.service';
import { ProfileDetailsComponent } from './backOffice/profile/profile-details/profile-details.component';
import { ChangePasswordComponent } from './commonCompos/change-password/change-password.component';
import { SponsorsComponent } from './commonCompos/sponsors/sponsors.component';
import { SignUpPageComponent } from './backOffice/sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SigninpageComponent,
    SignUpPageComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ProfileDetailsComponent,
    ChangePasswordComponent,
    SponsorsComponent,
  ],
  imports: [
    NgForm,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  // providers: [BackofficeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
