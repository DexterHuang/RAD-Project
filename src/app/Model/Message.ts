import { UserHelper } from './../Utility/UserHelper';
export class Message {
    userUid: string;
    private sentDate: any;
    content: string;
    constructor() {
        this.sentDate = new Date();
    }
    public getSentDate(): Date {
        if (typeof (this.sentDate) === 'string') {
            this.sentDate = new Date(this.sentDate);
        }
        return this.sentDate;
    }
    public getSender() {
        return UserHelper.getUser(this.userUid);
    }
}
