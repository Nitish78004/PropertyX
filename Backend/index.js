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

// 1. Security HTTP Headers
app.use(helmet({
    crossOriginResourcePolicy: false, // For local image serving
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

app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(fileUpload());
app.use(cors())
const PORT = 5000;
dbConnect()
app.use('/img', express.static('uploads'))
app.use('/api', router);
app.use('/api', adminRoute)


app.listen(PORT, () => {
    console.log("Server is running......")
})