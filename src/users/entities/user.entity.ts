export class User {
    toObject() {
        throw new Error('Method not implemented.');
    }
    readonly email: string;
    readonly password: string;
    readonly isSeller: boolean;
}
