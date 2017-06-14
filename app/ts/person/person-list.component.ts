import { Component } from '@angular/core'

import { Person } from 'model'
import { PersonService } from 'service'
import { dir } from 'default/app.config'

@Component({
    selector: 'person-list',
    templateUrl: dir('/person/person-list.template.html'),
})

export class PersonListComponent {
    personService: PersonService;

    mode: string = 'Observable'
    errorMessage: string;
    submitted: boolean = false;

    personTypes: Array<String> = [];
    personList: Array<Person> = [];
    person: Person = new Person;

    constructor(_personService: PersonService) {
        this.personService = _personService;
    }

    ngOnInit() {
        this.getTypes();
        this.getPersons();
    }

    getTypes() {
        this.personService.getTypes()
                          .map(type => this.personTypes.push(type));
    }

    getPersons() {
        this.personService.getPersons()
                        .subscribe(
                            persons => this.personList = persons,
                            error =>  this.errorMessage = <any>error
                        );
    }

    newPerson() {
        let newPerson = new Person(
            this.person.name,
            this.person.age,
            this.person.type
        );

        this.personList.push(newPerson);
        console.log(this.personList);
    }
}