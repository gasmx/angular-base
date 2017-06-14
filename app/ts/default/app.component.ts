import { Component } from '@angular/core'

import { AppService } from 'service'
import { Person } from 'model';
import { dir } from 'default/app.config';

@Component({
    selector: 'my-app',
    templateUrl: dir('/default/app.template.html'),        
    styleUrls: [dir('/default/app.styles.css')]
})

export class AppComponent {
    config: AppService;

    constructor(_config: AppService) {
        this.config = _config;
    }
}