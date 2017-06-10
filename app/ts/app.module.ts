import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'default/app.component';
import { AppConfig } from 'default/app.config';

@NgModule({
  declarations:   [ AppComponent ],
  bootstrap:      [ AppComponent ],
  imports:        [ BrowserModule ],
  providers:      [ AppConfig ]
})

export class AppModule {}