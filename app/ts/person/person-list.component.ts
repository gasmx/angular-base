import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

import { dir } from 'default/app.config'
import { Person } from 'model'
import { PersonService } from 'service'

@Component({
    selector: 'person-list',
    templateUrl: dir('/person/person-list.template.html')
})

export class PersonListComponent {
    mode: string = 'Observable'
    errorMessage: string;
    persons: Array<Person>;
    personService: PersonService;

    constructor(_personService: PersonService) {
        this.personService = _personService;
    }

    ngOnInit() {
        this.getPersons();
    }

    getPersons() {
        this.personService.getPersons()
                        .subscribe(
                            persons => this.persons = persons,
                            error =>  this.errorMessage = <any>error
                        );
    }

    addPerson(f: NgForm) {
        this.persons.push(new Person(f.value.name, f.value.age, f.value.email));
        // FAZER ISSO COM O TWO WAY DATA BINDING PARA PODER LIMPAR OS CAMPOS DO FORM
    }
}