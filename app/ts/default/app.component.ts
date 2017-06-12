import { Component } from '@angular/core'
import { AppConfig, dir } from 'default/app.config';
import { Person } from 'model';

@Component({
    selector: 'my-app',
    templateUrl: dir('/default/app.template.html')
})

export class AppComponent {
    config: AppConfig;

    constructor(_config: AppConfig) {
        this.config = _config;
        console.log(new Person("Gabriel Angelus", 21, "gangeluscf@gmail.com"));
    }
}