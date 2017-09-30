import { TripService } from './service/trip/trip/trip.service';
import { RequestService } from './service/request/request/request.service';
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
import { RequestListComponent } from './common/request-list/request-list/request-list.component';
import { RequestListItemComponent } from './common/request-list/request-list-item/request-list-item.component';
import { RequestsPageComponent } from './requests-page/requests-page/requests-page.component';
import { TripsPageComponent } from './trips-page/trips-page/trips-page.component';
import { TripListComponent } from './common/trip-list/trip-list/trip-list.component';
import { TripListItemComponent } from './common/trip-list/trip-list-item/trip-list-item.component';
import { InboxPageComponent } from './inbox-page/inbox-page/inbox-page.component';
import { ChatRoomPageComponent } from './chat-room-page/chat-room-page/chat-room-page.component';
import { RequestDetailPageComponent } from './request-detail-page/request-detail-page/request-detail-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ContactPageComponent,
    MenuPageComponent,
    PostTripPageComponent,
    PostRequestPageComponent,
    LoginPageComponent,
    RequestListComponent,
    RequestListItemComponent,
    RequestsPageComponent,
    TripsPageComponent,
    TripListComponent,
    TripListItemComponent,
    InboxPageComponent,
    ChatRoomPageComponent,
    RequestDetailPageComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [CountryService, UserService, ThreadService, RequestService, TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
