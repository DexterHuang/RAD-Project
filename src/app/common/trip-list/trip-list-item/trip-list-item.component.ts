import { Trip } from './../../../Model/Trip';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.css']
})
export class TripListItemComponent implements OnInit {
  @Input() trip: Trip;
  constructor() { }

  ngOnInit() {
  }

}
