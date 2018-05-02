import { Injectable } from '@angular/core';
import { eventlist } from './model'

export let eventlstforlook=eventlist

@Injectable()

export class EventService {

  constructor() { }
  remove(event){
    const index = eventlist.indexOf(event, 0);
    console.log(index)
    if (index > -1) {
    eventlist.splice(index, 1);
    eventlstforlook=eventlist
    }
  }
}
