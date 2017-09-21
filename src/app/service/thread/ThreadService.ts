import { RequestService } from './../request/request/request.service';


import { Injectable } from '@angular/core';
import { UserService } from '../user/user/user.service';
@Injectable()
export class ThreadService {

    constructor(private userService: UserService,
        private requestService: RequestService) { }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async waitForServices(f: Function) {
        while (this.userService.initialized === false ||
            this.requestService.initialized === false) {
            await this.sleep(300);
        }
        f();
    }
}
