import express from 'express'
import { CreateData,geyById,Search,StudentRegister,Login } from '../controller/authController.js'

const Route = express.Router()



Route.post("/Register",CreateData)
Route.post("/Login",Login)
Route.get("/geyById/:id",geyById)
Route.get("/Search",Search)
Route.post("/Student",StudentRegister)




export default Route