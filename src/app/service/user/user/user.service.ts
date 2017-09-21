import { ObjectHelper } from './../../../Utility/ObjectHelper';
import { User } from './../../../Model/User';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  private currentFirebaseUser: firebase.User;
  private currentUser: User;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentFirebaseUser = user;
        firebase.database().ref('users/' + user.uid).once('value', e => {
          if (e.exists()) {
            this.currentUser = ObjectHelper.toObject(e.val(), User);
          } else {
            const u = new User();
            u.uid = user.uid;
            u.displayName = user.displayName;
            u.email = user.email;
            u.photoURL = user.photoURL;
            this.currentUser = u;
            firebase.database().ref('users/' + user.uid).update(u).then();
          }
        });
      } else {
        this.currentFirebaseUser = null;
      }
    });
  }
  public signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  public IsSignedIn() {
    if (this.currentFirebaseUser) {
      return true;
    } else {
      return false;
    }
  }
  public signOut() {
    firebase.auth().signOut();
  }
}
