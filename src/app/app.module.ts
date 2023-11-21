import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { CentroComponent } from './centro/centro.component';
import { HereoModule } from './heroes/heroe/components/heroe.module';

@NgModule({
  declarations: [
    AppComponent,ContadorComponent,CentroComponent
  ],
  imports: [
    BrowserModule,
    HereoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
