import { Component, OnInit } from '@angular/core';

import { eventlist, } from '../model'
import { EventService, eventlstforlook} from "../event.service"


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private eventSevice:EventService) { }

  ngOnInit() {
  }
  eventlist = eventlstforlook

  remove(event){
    this.eventSevice.remove(event);
  }

  priorityToString(priority:number){
    switch(priority){
      case 1 : return "important"
      case 2 : return "normal"
      case 3 : return "later"
    }
  }
  tagToString(tag:number){
    switch(tag){
      case 1 : return "work"
      case 2 : return "play"
    }
  }

}
