enum priority {
    important=1,
    normal,
    later
}

enum Tag {
    work=1,
    play
}

class Eventmodel {
    eventname:string
    deadline?:Date
    priority:priority
    tag:Tag
}

const eventEXP:Eventmodel={
    eventname:"Java",
    priority:priority.important,
    tag:1
}

const eventEXP2:Eventmodel={
    eventname:"Java2",
    priority:3,
    tag:2
}

export const eventlist : Eventmodel [] = [
    eventEXP,eventEXP2,
]
