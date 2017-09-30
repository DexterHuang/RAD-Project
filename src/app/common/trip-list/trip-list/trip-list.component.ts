import { Trip } from './../../../Model/Trip';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  @Input() Trips: Trip[] = [];
  constructor() { }

  ngOnInit() {
  }

}
