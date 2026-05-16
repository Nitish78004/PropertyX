import mongoose from "mongoose"
export const dbConnect = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://nknitishsingh92_db_user:Nitish780045@clusterone.7zg3loj.mongodb.net/')
        if (con) {
            console.log("Db connected sucessfully to remote DB.........")
        }
    } catch (err) {
        console.error("Remote DB connection failed, trying local DB:", err.message);
        try {
            const localCon = await mongoose.connect('mongodb://localhost:27017/real_estate');
            if (localCon) {
                console.log("Db connected sucessfully to local DB.........")
            }
        } catch (localErr) {
            console.error("Local DB connection also failed:", localErr.message);
        }
    }
}