import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppConfig } from './default/app.config';
import { AppComponent } from './default/app.component';
import { PersonListComponent } from './person/person-list.component';

@NgModule({
  declarations:   [ AppComponent, PersonListComponent ],
  bootstrap:      [ AppComponent ],
  imports:        [ BrowserModule, HttpModule ],
  providers:      [ AppConfig ]
})

export class AppModule {}