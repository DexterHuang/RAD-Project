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
  private inboxListener = null;
  constructor() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (this.inboxListener !== null) {
        this.inboxListener.remove();
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
        const inboxRef = firebase.database().ref('inboxes/' + user.uid);
        this.inboxListener = await inboxRef.on('value', async (ee) => {
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
  public getCurrentUser() {
    return this.currentUser;
  }
  public getInbox() {
    return this.inbox;
  }
}
