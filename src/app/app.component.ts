import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAgYhCsNe5Rz_GypUJ8fxgzV2w7bRr_8rs',
      authDomain: 'rad-project2-e84f0.firebaseapp.com',
      databaseURL: 'https://rad-project2-e84f0.firebaseio.com',
      projectId: 'rad-project2-e84f0',
      storageBucket: '',
      messagingSenderId: '998652809907'
    };
    firebase.initializeApp(config);
  }
}
