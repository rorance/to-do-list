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
    deadline:Date
    priority:priority
    tag:Tag
} 
export const eventlist : Eventmodel [] = []
