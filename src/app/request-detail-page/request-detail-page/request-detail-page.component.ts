import { Request } from './../../Model/Request';
import { RequestService } from './../../service/request/request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-detail-page',
  templateUrl: './request-detail-page.component.html',
  styleUrls: ['./request-detail-page.component.css']
})
export class RequestDetailPageComponent implements OnInit {
  uid: string;
  private request: Request;
  constructor(private route: ActivatedRoute, private router: Router,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
    });
  }
  getRequest(): Request {
    if (this.request === undefined) {
      this.request = this.requestService.getRequest(this.uid);
    }
    return this.request;
  }
  onClickSend() {
    this.router.navigate(['/inbox/chatRoom/' + this.getRequest().creatorUid]);
  }
}
