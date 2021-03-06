import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './default/app.component';
import { PersonListComponent } from './person/person-list.component';
import { AppService, PersonService } from 'service';

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
    AppService,
    PersonService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}