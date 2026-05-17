// import { Password } from "@mui/icons-material"
import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    contact: { type: String },
    address: { type: String },
    profile: { type: String },
    userType: { type: String, default: 'user' },
    crearAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() }
})
export const userModel = mongoose.model('user', userSchema)

const propertySchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    area: { type: String },
    description: { type: String },
    location: { type: String },
    pic: { type: String },
    label: { type: String, default: 'FOR SALE' },
    beds: { type: Number, default: 3 },
    baths: { type: Number, default: 2 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})

export const propertyModel = mongoose.model('properties', propertySchema)

const BuyerSchema = new mongoose.Schema({
    userId: { type: String },
    propertyId: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})
export const buyerModel = mongoose.model('buyers', BuyerSchema)

const ContactUsSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: String },
    subject: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
})
export const contactUsModel = mongoose.model('contacts', ContactUsSchema)

const ReviewSchema = new mongoose.Schema({
    name: { type: String },
    role: { type: String, default: 'Client' },
    image: { type: String },
    feedback: { type: String },
    createdAt: { type: Date, default: Date.now }
})
export const reviewModel = mongoose.model('reviews', ReviewSchema)