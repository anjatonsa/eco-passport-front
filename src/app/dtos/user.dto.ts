export class UserDto {
    email: string;
    password: string;
    name: string;
    surname: string;
    phoneNumber: string;

    constructor(
        email: string,
        password: string,
        name: string,
        surname: string,
        phoneNumber: string,
    ) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

}