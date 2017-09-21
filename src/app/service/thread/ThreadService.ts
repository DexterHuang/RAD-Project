

import { Injectable } from '@angular/core';
import { UserService } from '../user/user/user.service';
@Injectable()
export class ThreadService {

    constructor(private userService: UserService) { }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async waitForServices(f: Function) {
        while (this.userService.initialized === false) {
            await this.sleep(300);
        }
        f();
    }
}
