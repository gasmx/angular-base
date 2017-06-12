import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppConfig } from './default/app.config';
import { AppComponent } from './default/app.component';
import { PersonListComponent } from './person/person-list.component';
import { PersonService } from 'service';

@NgModule({
    imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PersonListComponent
  ],
    providers: [
    AppConfig,
    PersonService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}