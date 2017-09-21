import { ThreadService } from './service/thread/ThreadService';
import { UserService } from './service/user/user/user.service';
import { CountryService } from './service/country/country/country.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ContactPageComponent } from './contact-page/contact-page/contact-page.component';
import { MenuPageComponent } from './menu-page/menu-page/menu-page.component';
import { PostTripPageComponent } from './post-trip-page/post-trip-page/post-trip-page.component';
import { PostRequestPageComponent } from './post-request-page/post-request-page/post-request-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ContactPageComponent,
    MenuPageComponent,
    PostTripPageComponent,
    PostRequestPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [CountryService, UserService, ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
