import { Fighter } from "./Fighter";

export interface User {
    id: string,
    firstname:string,
    lastname:string,
    email:string,
    phone:string,
    gamertag:string,
    mainCharacter: Fighter
}

export interface CreateUserDto {
    id: string,
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    phone:string,
    gamertag:string,
    mainCharacter: Fighter
}