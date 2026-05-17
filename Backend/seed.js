import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { propertyModel } from './model/table.js';

dotenv.config();

const pics = ['rent1.webp', 'rent2.jpg', 'rent3.jpg', 'rent4.jpg', 'rent6.webp', 'rent8.jpg', 'house2.webp', 'house4.jpg', 'house5.webp', 'house6.jpg'];
const locations = ['Mumbai, India', 'Delhi, India', 'Bangalore, India', 'Pune, India', 'Hyderabad, India', 'Chennai, India', 'Kolkata, India', 'Ahmedabad, India', 'Lucknow, India'];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://nknitishsingh92_db_user:Shakuntala9838@cluster0.irzp77x.mongodb.net/?appName=Cluster0');
        console.log('Connected to DB');

        const properties = [];

        // Generate 50 FOR SALE properties
        for (let i = 1; i <= 50; i++) {
            properties.push({
                title: `Premium Property Sale #${i}`,
                price: `$${(Math.random() * 800000 + 200000).toFixed(0)}`,
                area: `${(Math.random() * 2000 + 1000).toFixed(0)}`,
                description: `A beautiful and spacious property perfect for a family. Features modern architecture and great amenities.`,
                location: locations[Math.floor(Math.random() * locations.length)],
                pic: pics[Math.floor(Math.random() * pics.length)],
                label: 'FOR SALE',
                beds: Math.floor(Math.random() * 4) + 2,
                baths: Math.floor(Math.random() * 3) + 1,
            });
        }

        // Generate 20 FOR RENT properties
        for (let i = 1; i <= 20; i++) {
            properties.push({
                title: `Luxury Apartment Rent #${i}`,
                price: `$${(Math.random() * 3000 + 1000).toFixed(0)}/month`,
                area: `${(Math.random() * 1500 + 500).toFixed(0)}`,
                description: `Cozy and well-furnished apartment available for rent. Close to all major transit points.`,
                location: locations[Math.floor(Math.random() * locations.length)],
                pic: pics[Math.floor(Math.random() * pics.length)],
                label: 'FOR RENT',
                beds: Math.floor(Math.random() * 3) + 1,
                baths: Math.floor(Math.random() * 2) + 1,
            });
        }

        await propertyModel.insertMany(properties);
        console.log('Successfully added 50 SALE and 20 RENT properties!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
