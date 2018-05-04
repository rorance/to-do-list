import { Injectable } from '@angular/core';
import { Eventmodel , eventlist ,priority, Tag, } from './model'

export let eventlstforlook=eventlist

@Injectable()

export class EventService {

  constructor() { }
  remove(event){
    const index = eventlist.indexOf(event, 0);
    if (index > -1) {
    eventlist.splice(index, 1);
    eventlstforlook=eventlist
    }
  }

  priorityToEnum(i:number){
    switch(i){
      case 1:return priority.important
      case 2:return priority.normal
      case 3:return priority.later
    }
  }

  tagToEnum(j:number){
    switch(j){
      case 1:return Tag.work
      case 2:return Tag.play
    }
  }

  addevent(title:string,deadline:Date,priority,tag){
    const newPriority=+priority
    const newTag=+tag
    const newEvent:Eventmodel={
      eventname:title,
      deadline:deadline,
      priority:this.priorityToEnum(newPriority),
      tag:this.tagToEnum(newTag),
      undo:true
    }
    if(title!=null&&priority!=null&&tag!=null)
    {
    eventlist.push(newEvent)
    }
    else {
      alert("please filled all things but deadline")
    }
    eventlstforlook=eventlist
  }

  done(event){
    event.undo=false
  }

}
