import express from 'express';
import { buyerModel, propertyModel, userModel, contactUsModel, reviewModel } from '../model/table.js';
import { sendContactEmail } from '../config/mailer.js';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post('/user-register', async (req, res) => {
    try {
        const { name, email, password, contact, address } = req.body;
        console.log("Register Request Body:", req.body); // Log body
        
        let profileName = "";
        if (req.files && req.files.profile) {
            const { profile } = req.files;
            profileName = Date.now() + "_" + profile.name; // Unique name
            const uploadPath = path.join(__dirname, '../uploads/', profileName);
            
            await profile.mv(uploadPath);
        }

        const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(400).json({ code: 400, message: "User already exists", data: "" });
        } else {
            const data = new userModel({ 
                name, 
                email, 
                password, 
                contact, 
                address, 
                profile: profileName,
                userType: 'user'
            });
            const result = await data.save();
            return res.json({ code: 200, message: "User registered successfully", data: result });
        }
    } catch (err) {
        console.error("Registration Error:", err);
        return res.status(500).json({ 
            code: 500, 
            message: "Internal server error: " + (err.message || "Unknown error"), 
            data: "" 
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isLogin = await userModel.findOne({ email, password });
        if (isLogin) {
            res.json({
                code: 200,
                message: "Login Successfully..",
                data: isLogin
            });
        } else {
            res.json({
                code: 400,
                message: "Invalid Credentials.",
                data: ""
            });
        }
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error",
            data: ''
        });
    }
});

router.post('/buy', async (req, res) => {
    try {
        const { userId, propertyId } = req.body;
        const isSold = await buyerModel.findOne({ propertyId })
        if (isSold) {
            res.json({
                code: 400,
                message: "Property Already Sold..",
                data: isSold
            });
        } else {
            const data = new buyerModel({ userId, propertyId })
            const result = await data.save();
            res.json({
                code: 200,
                message: "Property Bought Sucessfully..",
                data: result
            });
        }
    }
    catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error",
            data: ''
        });
    }
});

router.post('/user-bought-list', async (req, res) => {
    try {
        const { userId } = req.body;
        const raw = await buyerModel.find({ userId });
        const finalData = await Promise.all(
            raw?.map(async (item) => {
                const propertyData = await propertyModel.findOne({ _id: item?.propertyId });
                return {
                    _id: item?._id,
                    propertyId: propertyData?._id,
                    title: propertyData?.title,
                    price: propertyData?.price,
                    area: propertyData?.area,
                    location: propertyData?.location,
                    description: propertyData?.description,
                    pic: propertyData?.pic
                };
            })
        );
        res.json({
            code: 200,
            message: "Data fetched successfully.",
            data: finalData
        });
    } catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error",
            data: ''
        });
    }
});

router.put('/user-update', async (req, res) => {
    try {
        const { name, email, password, contact, address, userId } = req.body;
        const updateData = { name, email, password, contact, address };
        if (req.files && req.files.profile) {
            const { profile } = req.files;
            await new Promise((resolve, reject) => {
                profile.mv("uploads/" + profile.name, (err) => {
                    if (err) return reject(err);
                    resolve();
                });
            });
            updateData.profile = profile.name;
        }
        const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
        if (updatedUser) {
            return res.json({ code: 200, message: "Profile updated successfully.", data: updatedUser });
        } else {
            return res.json({ code: 400, message: "Update failed, user not found.", data: "" });
        }
    } catch (err) {
        console.error(err);
        return res.json({ code: 500, message: "Internal Server Error", data: "" });
    }
});

router.post('/add-contact-us', async (req, res) => {
    try {
        const { name, email, contact, subject, message } = req.body;
        const newContact = new contactUsModel({ name, email, contact, subject, message });
        const result = await newContact.save();
        
        // Send email notification
        await sendContactEmail({ name, email, contact, subject, message });

        return res.json({
            code: 200,
            message: "Message sent successfully!",
            data: result
        });
    } catch (err) {
        console.error(err);
        return res.json({
            code: 500,
            message: "Internal Server Error: " + err.message,
            data: ""
        });
    }
});

router.post('/add-review', async (req, res) => {
    try {
        const { name, role, feedback, image } = req.body;
        const newReview = new reviewModel({ name, role, feedback, image });
        const result = await newReview.save();
        return res.json({ code: 200, message: "Review added successfully!", data: result });
    } catch (err) {
        return res.json({ code: 500, message: "Internal Server Error", data: "" });
    }
});

router.get('/get-reviews', async (req, res) => {
    try {
        const reviews = await reviewModel.find().sort({ createdAt: -1 });
        return res.json({ code: 200, message: "Data fetched successfully.", data: reviews });
    } catch (err) {
        return res.json({ code: 500, message: "Internal Server Error", data: "" });
    }
});

export default router;