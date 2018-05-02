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

export const eventlist : Eventmodel [] = [
    eventEXP,
]
