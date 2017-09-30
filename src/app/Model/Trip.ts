import { ObjectHelper } from './../Utility/ObjectHelper';
import * as firebase from 'firebase';

export class Trip {
    userUid: string;
    userName: string;
    fromDate: any;
    toDate: any;
    fromCountry: string;
    toCountry: string;
    uid: string;


    public save() {
        return ObjectHelper.updateToFirebase(this, 'trips/');
    }
    public getFromDate(): Date {
        return ObjectHelper.getDate(this.fromDate);
    }
    public getToDate(): Date {
        return ObjectHelper.getDate(this.toDate);
    }
}
