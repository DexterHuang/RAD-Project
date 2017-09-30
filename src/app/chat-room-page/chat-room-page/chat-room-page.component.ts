import { Message } from './../../Model/Message';
import { element } from 'protractor';
import { ThreadService } from './../../service/thread/ThreadService';
import { UserService } from './../../service/user/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-room-page',
  templateUrl: './chat-room-page.component.html',
  styleUrls: ['./chat-room-page.component.css']
})
export class ChatRoomPageComponent implements OnInit {
  @ViewChild('inputBox') inputBox: ElementRef;
  uid: string;
  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService, public threadService: ThreadService) { }

  ngOnInit() {
    this.route.params.subscribe(e => {
      this.uid = e['uid'];
      if (!this.uid) {
        this.router.navigate(['./home']);
      }
    });
  }
  isSignedIn() {
    return this.userService.IsSignedIn();
  }
  getInbox() {
    return this.userService.getInbox();
  }
  getCurrentString(): string {
    return this.inputBox.nativeElement.value;
  }
  getChatRoom() {
    return this.userService.getInbox().getChatRoom(this.uid);
  }
  async onClickSend() {
    if (this.getCurrentString()) {
      const msg = new Message();
      msg.content = this.getCurrentString();
      msg.userUid = this.userService.getCurrentUser().uid;
      this.getChatRoom().getMessages().push(msg);
      this.inputBox.nativeElement.value = '';
      await this.getInbox().update();
    }

  }
}
