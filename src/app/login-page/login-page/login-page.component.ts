import { Router } from '@angular/router';
import { UserService } from './../../service/user/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onClickGoogleLogin() {
    this.userService.signIn();
  }
}
