import { Request } from './../../../Model/Request';
import { ObjectHelper } from './../../../Utility/ObjectHelper';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestService {

  initialized = false;
  private requests: Request[] = [];
  constructor() {
    ObjectHelper.pullObjectsFromFirebase('requests/', Request).then(list => {
      this.requests = list;
      this.initialized = true;
    });
  }
  getRequests() {
    return this.requests;
  }
}
