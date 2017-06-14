export class Person {
    constructor(
        public name?: string,
        public age?: string | number,
        public type?: string
    ) {
        if (!name) {
            this.name = '';
            this.age = '';
            this.type = '';
        }
    }
}