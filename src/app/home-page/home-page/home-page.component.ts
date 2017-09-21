import { RequestService } from './../../service/request/request/request.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }
  getRequests() {
    return this.requestService.getRequests();
  }
}
