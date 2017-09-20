import { Trip } from './../../Model/Trip';
import { CountryService } from './../../service/country/country/country.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post-trip-page',
  templateUrl: './post-trip-page.component.html',
  styleUrls: ['./post-trip-page.component.css']
})
export class PostTripPageComponent implements OnInit {
  trip: Trip = new Trip();
  constructor(private countryService: CountryService) { }

  ngOnInit() {

  }
  getCountries() {
    return this.countryService.getCountryNames();
  }
  countryFilter(a: string[], b: string) {
    return a.filter((value: string) => {
      return value.toUpperCase().indexOf(b.toUpperCase()) >= 0;
    });
  }
}
