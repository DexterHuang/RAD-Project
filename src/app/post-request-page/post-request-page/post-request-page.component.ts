import { CountryService } from './../../service/country/country/country.service';
import { Request } from './../../Model/Request';
import { Router } from '@angular/router';
import { UserService } from './../../service/user/user/user.service';
import { ThreadService } from './../../service/thread/ThreadService';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-post-request-page',
  templateUrl: './post-request-page.component.html',
  styleUrls: ['./post-request-page.component.css']
})
export class PostRequestPageComponent implements OnInit {
  request: Request = new Request();
  selectedFiles: File[] = [];
  constructor(private threadService: ThreadService,
    private userService: UserService,
    private router: Router,
    private countryService: CountryService) { }

  ngOnInit() {
    this.threadService.waitForServices(() => {
      if (this.userService.IsSignedIn() === false) {
        this.router.navigate(['/home']);
      }
    });
  }
  getCountryNames() {
    return this.countryService.getCountryNames();
  }
  isFormValid() {
    if (!this.request.description ||
      !this.request.fromDate ||
      !this.request.toDate ||
      !this.request.itemName ||
      !this.request.paymentPrice ||
      !this.request.retailPrice ||
      !this.request.soldLocation ||
      !this.request.transactionLocation ||
      !this.request.title) {
      return false;

    } else {
      return true;
    }
  }
  private isNotNull(a: any) {
    if (a || a === null || a === '') {
      return false;
    } else {
      return true;
    }
  }
  async onClickSend() {
    if (this.isFormValid()) {
      this.request.uid = firebase.database().ref('requests').push().key;
      for (const file of this.selectedFiles) {
        const url: string = await this.uploadImage(file, this.request.uid);
        this.request.imageURLs.push(url);
      }
      this.request.creatorUid = this.userService.getCurrentUser().uid;
      await this.request.save();
      this.router.navigate(['/home']);
    }
  }
  uploadImage(file: File, uid: string) {
    return new Promise<string>((resolve, reject) => {
      firebase.storage().ref('images/' + uid + '/' + file.name).put(file).then(e => {
        resolve(e.downloadURL);
      });
    });
  }
  onFileChange(e: any) {
    const files: any = e.target.files;
    this.selectedFiles = Object.keys(files)
      .filter(key => key !== 'length')
      .map(key => files[key])
      .filter((file: File) => file.type.includes('image/'));
  }
}
