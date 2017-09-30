import { User } from './User';
import { UserHelper } from './../Utility/UserHelper';
import { Message } from './Message';
export class ChatRoom {
    uid: string;
    private messages: Message[] = [];

    public getMessages() {
        if (this.messages.length > 0) {
            if (this.messages[0] instanceof Message === false) {
                this.messages = this.messages.map(obj => {
                    const msg = new Message();
                    Object.assign(msg, obj);
                    return msg;
                });
            }
        }
        return this.messages;
    }
    public getUser(): User {
        return UserHelper.getUser(this.uid);
    }
}
