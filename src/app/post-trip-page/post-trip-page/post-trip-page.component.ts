import { CountryService } from './../../service/country/country/country.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post-trip-page',
  templateUrl: './post-trip-page.component.html',
  styleUrls: ['./post-trip-page.component.css']
})
export class PostTripPageComponent implements OnInit {
  arrivalDate: Date;
  constructor(private countryService: CountryService) { }

  ngOnInit() {

  }
  getCountries() {
    return this.countryService.getCountryNames();
  }
}
