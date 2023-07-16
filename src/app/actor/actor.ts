export interface actorDTO{
    name:string,
    birthDate:Date,
    photo:string,
}

export interface actorCreateDTO{
    name:string,
    birthDate:Date,
    photo:File,
}