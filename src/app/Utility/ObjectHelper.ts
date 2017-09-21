export class ObjectHelper {

    public static toObject<T>(firebaseObject: any, type: { new(): T; }) {
        const newType: T = new type();
        Object.assign(newType, firebaseObject);
        return newType;
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
}
