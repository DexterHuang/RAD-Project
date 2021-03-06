import { UserHelper } from './../Utility/UserHelper';
import { User } from './User';
import { ObjectHelper } from './../Utility/ObjectHelper';

export class Request {
    creatorUid: string;
    fromDate: any;
    toDate: any;
    title: string;
    description: string;
    itemName: string;
    soldLocation: string;
    transactionLocation: string;
    uid: string;
    retailPrice: number;
    paymentPrice: number;
    imageURLs: string[] = [];
    public save() {
        return ObjectHelper.updateToFirebase(this, 'requests/');
    }
    getCreator(): User {
        return UserHelper.getUser(this.creatorUid);
    }
}
