import { UserService } from './../../service/user/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isSignedIn() {
    return this.userService.IsSignedIn();
  }
  onClickSignOut() {
    this.userService.signOut();
    this.router.navigate(['/home']);
  }
}
