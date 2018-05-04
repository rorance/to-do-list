import { Component, OnInit } from '@angular/core';

import { eventlist, } from '../model'
import { EventService, eventlstforlook } from "../event.service"
import { OrderByParam } from '../pipe.pipe';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit() {
  }
  
  eventlist = eventlstforlook
  order = new OrderByParam()
  remove(event){
    this.eventService.remove(event)
  }

  done(event){
    this.eventService.done(event)
  }

  search=""

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
  sort(column: string, orderBy: string) {  // ←イベント発火地点
    this.order.set(column, orderBy);  // ←ソートを行う
  }

}
