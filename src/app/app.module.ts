import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EventService } from "./event.service";
import { searchPipe, sortPipe } from './pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AddeventComponent,
    searchPipe,
    sortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
