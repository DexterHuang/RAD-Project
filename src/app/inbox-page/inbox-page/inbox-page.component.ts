import { UserService } from './../../service/user/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.css']
})
export class InboxPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  isSignedIn() {
    return this.userService.IsSignedIn();
  }
  getInbox() {
    return this.userService.getInbox();
  }
}
