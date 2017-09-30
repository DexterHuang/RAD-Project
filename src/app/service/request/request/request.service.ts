import { Request } from './../../../Model/Request';
import { ObjectHelper } from './../../../Utility/ObjectHelper';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestService {

  initialized = false;
  private requests: Request[] = [];
  constructor() {
    ObjectHelper.pullObjectsFromFirebase('requests/', Request, list => {
      this.requests = list;
      this.initialized = true;
    });
  }
  getRequests() {
    return this.requests;
  }
  getRequest(uid: string) {
    return this.getRequests().find(request => request.uid === uid);
  }
}
