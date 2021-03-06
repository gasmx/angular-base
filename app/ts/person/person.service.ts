import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';

import { Person } from 'model'

@Injectable()
export class PersonService {
    private personsUrl = 'app/persons.json';

    constructor (private http: Http) {}

    getPersons(): Observable<Array<Person>> {
        return this.http.get(this.personsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getTypes(): Array<String> {
        return [
            "Child", "Teenager", "Adult", "Elder"
        ];
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}