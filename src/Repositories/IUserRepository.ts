import { CreateUserDto, User } from "../Models/User";

export interface IUserRepository {
    getAll() : Promise<User[]>,
    get(id : string) : Promise<User>,
    update(id : string, newUser : CreateUserDto) : Promise<User>,
    add(newUser : CreateUserDto) : Promise<User>,
    delete(id : string) : void 
}