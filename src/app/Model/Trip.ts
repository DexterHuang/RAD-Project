import { ObjectHelper } from './../Utility/ObjectHelper';
import * as firebase from 'firebase';

export class Trip {
    userUid: string;
    fromDate: any;
    toDate: any;
    fromCountry: string;
    toCountry: string;
    uid: string;

    public save() {
        ObjectHelper.convertInvalidData(this);
        if (this.uid === undefined) {
            const ref = firebase.database().ref('trips/').push();
            this.uid = ref.key;
        }
        return firebase.database().ref('trips/' + this.uid).update(this);
    }
    public getFromDate(): Date {
        return ObjectHelper.getDate(this.fromDate);
    }
    public getToDate(): Date {
        return ObjectHelper.getDate(this.toDate);
    }
}
