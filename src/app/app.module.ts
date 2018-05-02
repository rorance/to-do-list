import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EventService } from "./event.service";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AddeventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
