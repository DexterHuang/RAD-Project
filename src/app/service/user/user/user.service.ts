import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  private currentFirebaseUser: firebase.User;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentFirebaseUser = user;
        console.log(user);
      } else {
        this.currentFirebaseUser = null;
      }
    });
  }
  public SignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  public IsSignedIn() {
    return false;
  }
}
