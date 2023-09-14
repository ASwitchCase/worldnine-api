import { UserService } from "../Services/UserService"

const getAllUsers = async (req,res) =>{
    const data = await UserService.getAllUsers()
    res.json(data)
}

const getUser = async (req,res) =>{
    const data  = await UserService.getUser(req.params.id)
    res.json(data)
}

const updateUser = async (req,res) =>{
    const newData = req.body
    res.json(
        await UserService.updateUser(req.params.id,newData)
    )
}

const createUser = async (req,res) =>{
    const newData = req.body
    res.json(
        await UserService.createUser(newData)
    )
}

const deleteUser = async (req,res) =>{
    await UserService.deleteUser(req.params.id)
    res.json("User Deleted")
}

export const UserController = {
    updateUser,
    createUser,
    deleteUser,
    getAllUsers,
    getUser
}