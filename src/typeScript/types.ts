enum GENDER{
    MALE,
    FEMALE
}

interface Invitees{
    id:number,
    name:string,
    gender:GENDER
}

export {GENDER, type Invitees}