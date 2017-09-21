import { CountryService } from './../../service/country/country/country.service';
import { Request } from './../../Model/Request';
import { Router } from '@angular/router';
import { UserService } from './../../service/user/user/user.service';
import { ThreadService } from './../../service/thread/ThreadService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-request-page',
  templateUrl: './post-request-page.component.html',
  styleUrls: ['./post-request-page.component.css']
})
export class PostRequestPageComponent implements OnInit {
  request: Request = new Request();
  constructor(private threadService: ThreadService,
    private userService: UserService,
    private router: Router,
    private countryService: CountryService) { }

  ngOnInit() {
    this.threadService.waitForServices(() => {
      if (this.userService.IsSignedIn() === false) {
        this.router.navigate(['/home']);
      }
    });
  }
  getCountryNames() {
    return this.countryService.getCountryNames();
  }
  isFormValid() {
    if (!this.request.description ||
      !this.request.fromDate ||
      !this.request.toDate ||
      !this.request.itemName ||
      !this.request.paymentPrice ||
      !this.request.retailPrice ||
      !this.request.soldLocation ||
      !this.request.transactionLocation ||
      !this.request.title) {
      return false;

    } else {
      return true;
    }
  }
  private isNotNull(a: any) {
    if (a || a === null || a === '') {
      return false;
    } else {
      return true;
    }
  }
  onClickSend() {
    if (this.isFormValid()) {
      this.request.save().then(e => {
        this.router.navigate(['/home']);
      });
      this.request = new Request();
    }
  }
}
