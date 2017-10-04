import { Router } from '@angular/router';
import { Inbox } from './../../../Model/Inbox';
import { ObjectHelper } from './../../../Utility/ObjectHelper';
import { User } from './../../../Model/User';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  private currentFirebaseUser: firebase.User;
  private currentUser: User;
  public initialized = false;
  private inbox: Inbox;
  private inboxRef: firebase.database.Reference = null;
  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (this.inboxRef != null) {
        this.inboxRef.off('value');
      }
      if (user) {
        this.currentFirebaseUser = user;
        const e = await firebase.database().ref('users/' + user.uid).once('value');
        if (e.exists()) {
          this.currentUser = ObjectHelper.toObject(e.val(), User);
        } else {
          const u = new User();
          u.uid = user.uid;
          u.displayName = user.displayName;
          u.email = user.email;
          u.photoURL = user.photoURL;
          this.currentUser = u;
          await firebase.database().ref('users/' + user.uid).update(u);
        }
        this.inboxRef = firebase.database().ref('inboxes/' + user.uid);
        await this.inboxRef.on('value', async (ee) => {
          if (ee.exists()) {
            this.inbox = ObjectHelper.toObject(ee.val(), Inbox);
          } else {
            const inbox = new Inbox();
            inbox.userUid = user.uid;
            await inbox.update();
          }
        });
      } else {
        this.currentFirebaseUser = null;
      }
      this.initialized = true;
    });
  }
  public signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(e => {
      this.router.navigate(['home']);
    });
  }
  public IsSignedIn() {
    if (this.currentFirebaseUser) {
      return true;
    } else {
      return false;
    }
  }
  public signOut() {
    firebase.auth().signOut().then(e => {
      this.router.navigate(['/home']);
    });
  }
  public getCurrentUser() {
    return this.currentUser;
  }
  public getInbox() {
    return this.inbox;
  }
}
