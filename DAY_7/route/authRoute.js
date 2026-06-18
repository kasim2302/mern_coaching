import express from 'express'
import { CreateData,CreateParams,CreateQuery,CreateHeader } from '../controller/authController.js'

const Route = express.Router()



Route.post("/Register",CreateData)
Route.get("/Linkparams/:userid",CreateParams)
Route.get("/LinkQuery",CreateQuery)
Route.get("/Linkheader",CreateHeader)




export default Route