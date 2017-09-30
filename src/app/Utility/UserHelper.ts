import { ObjectHelper } from './ObjectHelper';
import { User } from './../Model/User';
import * as firebase from 'firebase';
export class UserHelper {

    private static users = {};
    private static placeholderUser: User;

    public static async getUserPromise(uid: string): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            if (this.users[uid] === undefined) {
                console.log('fetching', uid, '....');
                this.users[uid] = this.getPlaceholderUser();
                const snap = await firebase.database().ref('users/' + uid).once('value');
                this.users[uid] = ObjectHelper.toObject(snap.val(), User);
            }
            resolve(this.users[uid]);
        });
    }
    private static getPlaceholderUser(): User {
        if (!this.placeholderUser) {
            this.placeholderUser = new User();
            this.placeholderUser.displayName = 'loading user..';
            this.placeholderUser.photoURL = 'https://i.stack.imgur.com/NKEOW.jpg';
        }
        return this.placeholderUser;
    }
    public static getUser(uid: string): User {
        if (this.users[uid] === undefined) {
            this.getUserPromise(uid).then();
            return this.getPlaceholderUser();
        }
        return this.users[uid];
    }
}
