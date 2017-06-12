import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { Person } from 'model'

@Injectable()
export class HeroService {
    private personsUrl = 'api/heroes';

    constructor (private http: Http) {}
}