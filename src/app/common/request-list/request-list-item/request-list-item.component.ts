import { Request } from './../../../Model/Request';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-list-item',
  templateUrl: './request-list-item.component.html',
  styleUrls: ['./request-list-item.component.css']
})
export class RequestListItemComponent implements OnInit {
  @Input() request: Request;
  constructor() { }

  ngOnInit() {
  }

}
