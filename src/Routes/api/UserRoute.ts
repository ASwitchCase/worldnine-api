import { UserController } from "../../Controllers/UsersController"

const express = require('express')
const router = express.Router()

router.route('/')
    .get(UserController.getAllUsers)
    .post(UserController.createUser)

router.route('/:id')
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)

export const UserRoutes = router