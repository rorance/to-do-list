import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service'


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit() {
  }
  title:string
  deadline:Date
  priority:number
  tag:number
  addevent(){
    this.eventService.addevent(this.title,this.deadline,this.priority,this.tag)
  }

}
