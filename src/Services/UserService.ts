import { MongoClient } from "mongodb";
import { UserRepository } from "../Repositories/UserRepository";
import {v4 as uuidv4} from "uuid"
import { CreateUserDto } from "../Models/User";

let repo = new UserRepository(new MongoClient(process.env.URI))

const getAllUsers = async () => {
    return await repo.getAll()
}

const getUser = async (id : string) => {
    return await repo.get(id)
}

const createUser = async (newUser: CreateUserDto) => {
    newUser.id = uuidv4()
    return repo.add(newUser)
}

const updateUser = async (id : string , newUser : CreateUserDto) => {
    newUser.id = id
    return repo.update(id,newUser)
}

const deleteUser =async (id : string) => {
    repo.delete(id)
}

export const UserService = {
    updateUser,
    createUser,
    deleteUser,
    getAllUsers,
    getUser
}
