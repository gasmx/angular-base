import { Component } from '@angular/core'
import { dir } from 'default/app.config'
import { Person } from 'model'

@Component({
    selector: 'todo',
    templateUrl: dir('/person/person-list.template.html')
})

export class PersonListComponent {
    mode:string = 'Observable'
    errorMessage: string;
    persons: Array<Person>;
    
    constructor() {}
}