import { TripService } from './../../service/trip/trip/trip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.css']
})
export class TripsPageComponent implements OnInit {

  constructor(private tripService: TripService) { }

  ngOnInit() {
  }
  getTrips() {
    return this.tripService.getTrips();
  }
}
