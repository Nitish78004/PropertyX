import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { dbConnect } from './config/db.js'
import router from "./route/userRoute.js";
import adminRoute from './route/adminRoute.js'
import fileUpload from "express-fileupload";
import cors from 'cors'

const app = express();
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Temporarily removed security middleware for local debugging
const PORT = process.env.PORT || 5000;
dbConnect()
app.use('/img', express.static('uploads'))
app.use('/api', router);
app.use('/api', adminRoute)


app.listen(PORT, () => {
    console.log("Server is running......")
})