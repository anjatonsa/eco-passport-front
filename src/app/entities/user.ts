export class User {
    _id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    phoneNumber: string;

    constructor(
        _id: string,
        email: string,
        password: string,
        name: string,
        surname: string,
        phoneNumber: string,
    ) {
        this._id = _id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

}