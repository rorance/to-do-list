export enum priority {
    important=1,
    normal,
    later
}

export enum Tag {
    work=1,
    play
}

export class Eventmodel {
    eventname:string
    deadline?:Date
    priority:priority
    tag:Tag
    undo:boolean
}

const eventEXP:Eventmodel={
    eventname:"Java",
    priority:priority.important,
    tag:1,
    undo:true
}

const eventEXP2:Eventmodel={
    eventname:"Java2",
    priority:3,
    tag:2,
    undo:true
}

export let eventlist : Eventmodel [] = [
    eventEXP,eventEXP2,
]
