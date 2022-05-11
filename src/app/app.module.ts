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
import { BackofficeServiceService } from './services/backoffice-service.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    SigninpageComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BackofficeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
