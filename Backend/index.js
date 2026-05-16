import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { dbConnect } from './config/db.js'
import router from "./route/userRoute.js";
import adminRoute from './route/adminRoute.js'
import fileUpload from "express-fileupload";
import cors from 'cors'
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

const app = express();
app.use(cors()) // Move to top
app.use(express.json({ limit: '10kb' })); 
app.use(fileUpload());

// 1. Security HTTP Headers - Relaxed for local dev
app.use(helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false, 
}));

// 2. Data Sanitization against NoSQL Query Injection
app.use(mongoSanitize());

// 3. Data Sanitization against XSS
app.use(xss());

// 4. Prevent Parameter Pollution
app.use(hpp());

// 5. Rate Limiting
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!"
});
app.use("/api", limiter);

const PORT = 5000;
dbConnect()
app.use('/img', express.static('uploads'))
app.use('/api', router);
app.use('/api', adminRoute)


app.listen(PORT, () => {
    console.log("Server is running......")
})