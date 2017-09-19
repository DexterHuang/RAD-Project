import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post-trip-page',
  templateUrl: './post-trip-page.component.html',
  styleUrls: ['./post-trip-page.component.css']
})
export class PostTripPageComponent implements OnInit {
  startDate: Date;
  constructor() { }

  ngOnInit() {
  }
}
