import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

export class ObjectHelper {

    public static toObject<T>(object: any, type: { new(): T; }) {
        const newType: T = new type();
        Object.assign(newType, object);
        return newType;
    }
    public static toObjectList<T>(list: any[], type: { new(): T; }) {
        const newList: T[] = [];
        list.forEach(obj => {
            newList.push(this.toObject(obj, type));
        });
        return newList;
    }
    public static convertInvalidData<T>(o: any) {
        Object.keys(o).forEach(key => {
            if (o[key] instanceof Date) {
                o[key] = o[key].toJSON();
            }
        });
        return o;
    }
    public static getDate(o: Date | string | any): Date {
        if (typeof (o) === 'string') {
            return new Date(o);
        } else if (o instanceof Date) {
            return o;
        }
    }
    public static updateToFirebase(o: { uid: string }, path: string) {
        if (path.endsWith('/') === false) {
            path += '/';
        }
        ObjectHelper.convertInvalidData(o);
        if (o.uid === undefined) {
            const ref = firebase.database().ref(path).push();
            o.uid = ref.key;
        }
        return firebase.database().ref(path + o.uid).update(o);
    }
    public static pullObjectsFromFirebase<T>(
        path: string,
        type: { new(): T; },
        callback: (list: T[]) => any) {
        if (path.endsWith('/') === false) {
            path += '/';
        }
        return firebase.database().ref(path).on('value', e => {
            const list: T[] = [];
            if (e.exists()) {
                const o = e.val();
                Object.keys(o).forEach(key => {
                    const newObject: T = this.toObject(o[key], type);
                    list.push(newObject);
                });
            }
            callback(list);
        });
    }
}
