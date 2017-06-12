export class Person {
    name: string;
    age: string;
    email: string;

    constructor(
        name: string,
        age: string,
        email?: string
    ) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}