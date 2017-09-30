import { Router } from '@angular/router';
import { UserService } from './../../service/user/user/user.service';
import { ThreadService } from './../../service/thread/ThreadService';
import { Trip } from './../../Model/Trip';
import { CountryService } from './../../service/country/country/country.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-trip-page',
  templateUrl: './post-trip-page.component.html',
  styleUrls: ['./post-trip-page.component.css']
})
export class PostTripPageComponent implements OnInit {
  trip: Trip = new Trip();
  constructor(private countryService: CountryService,
    private threadService: ThreadService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.threadService.waitForServices(() => {
      if (this.userService.IsSignedIn() === false) {
        this.router.navigate(['/home']);
      }
    });
  }
  getCountries() {
    return this.countryService.getCountryNames();
  }
  countryFilter(a: string[], b: string) {
    return a.filter((value: string) => {
      return value.toUpperCase().indexOf(b.toUpperCase()) >= 0;
    });
  }
  isFormValid() {
    if (!this.trip.fromCountry ||
      !this.trip.toCountry ||
      !this.trip.fromDate ||
      !this.trip.toDate) {
      return false;
    } else {
      return true;
    }
  }
  onClickSend() {
    if (this.isFormValid()) {
      this.trip.userUid = this.userService.getCurrentUser().uid;
      this.trip.userName = this.userService.getCurrentUser().displayName;
      this.trip.save();
    }
  }
}
