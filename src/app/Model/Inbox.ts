import { ObjectHelper } from './../Utility/ObjectHelper';
import { ChatRoom } from './ChatRoom';
export class Inbox {
    userUid: string;
    uid: string;
    private chatRooms: ChatRoom[] = [];

    public getChatRooms() {
        if (this.chatRooms.length > 0) {
            if (this.chatRooms[0] instanceof ChatRoom === false) {
                this.chatRooms = ObjectHelper.toObjectList(this.chatRooms, ChatRoom);
            }
        }
        return this.chatRooms;
    }
    public getChatRoom(uid: string) {
        const c = this.getChatRooms().find(chatRoom => chatRoom.uid === uid);
        if (c === undefined) {
            const newChatRoom = new ChatRoom();
            newChatRoom.uid = uid;
            this.chatRooms.push(newChatRoom);
            return newChatRoom;
        }
        return c;
    }
    public update() {
        this.uid = this.userUid;
        return ObjectHelper.updateToFirebase(this, 'inboxes');
    }
}
