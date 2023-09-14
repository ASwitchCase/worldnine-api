import { MongoClient } from "mongodb";
import { CreateUserDto, User } from "../Models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    private readonly DB_NAME = "worldNine";
    private readonly COLLECTION_NAME = "Users";
    
    constructor(private client : MongoClient){}

    async getAll(): Promise<User[]> | undefined{
        let result = undefined
        try {
            await this.client.connect()

            result = await this.client.db(this.DB_NAME)
                .collection(this.COLLECTION_NAME)
                .find({},{projection:{_id:0 ,password: 0}}).toArray()

        }catch(e){
            console.error(e)
        }finally{
            await this.client.close()
        }
        return result
    }

    async get(id: string): Promise<User> | undefined{
        let result = undefined
        try{
            await this.client.connect()
            result = await this.client.db(this.DB_NAME)
                .collection(this.COLLECTION_NAME)
                .findOne({id:id},{projection:{_id:0,password: 0}})

        }catch(e){
            console.error(e)
        }finally{
            this.client.close()
        }
        return result
    }

    async update(id: string, newUser: CreateUserDto): Promise<User> | undefined{
        let result = undefined
        try{
            await this.client.connect()
            result = await this.client.db(this.DB_NAME)
                .collection(this.COLLECTION_NAME)
                .updateOne({id : id},{$set: newUser})
            
        }catch(e){
            console.error(e)
        }finally{
            this.client.close()
        }
        return result
    }

    async add(newUser: CreateUserDto): Promise<User> | undefined{
        let result = undefined
        try{
            await this.client.connect()
            result = await this.client.db(this.DB_NAME)
                .collection(this.COLLECTION_NAME)
                .insertOne(newUser)
            
        }catch(e){
            console.error(e)
        }finally{
            this.client.close()
        }
        return result
    }

    async delete(id: string): Promise<void> {
        try{
            await this.client.connect()
            
            await this.client.db(this.DB_NAME)
                .collection(this.COLLECTION_NAME)
                .deleteOne({id:id})
            
        }catch(e){
            console.error(e)
        }finally{
            this.client.close()
        }
    }

}