import { RequestService } from './../../service/request/request/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.css']
})
export class RequestsPageComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }
  getRequests() {
    return this.requestService.getRequests();
  }
}
