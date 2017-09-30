import { RequestDetailPageComponent } from './request-detail-page/request-detail-page/request-detail-page.component';
import { ChatRoomPageComponent } from './chat-room-page/chat-room-page/chat-room-page.component';
import { InboxPageComponent } from './inbox-page/inbox-page/inbox-page.component';
import { TripsPageComponent } from './trips-page/trips-page/trips-page.component';
import { RequestsPageComponent } from './requests-page/requests-page/requests-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { PostRequestPageComponent } from './post-request-page/post-request-page/post-request-page.component';
import { PostTripPageComponent } from './post-trip-page/post-trip-page/post-trip-page.component';
import { MenuPageComponent } from './menu-page/menu-page/menu-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'postTrip', component: PostTripPageComponent },
  { path: 'postRequest', component: PostRequestPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'requests', component: RequestsPageComponent },
  { path: 'trips', component: TripsPageComponent },
  { path: 'inbox', component: InboxPageComponent },
  { path: 'inbox/chatRoom/:uid', component: ChatRoomPageComponent },
  { path: 'request/:uid', component: RequestDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
