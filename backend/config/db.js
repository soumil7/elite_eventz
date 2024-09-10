import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://eliteeventz:eliteeventz@eliteeventz.hcbqw.mongodb.net/elite").then(()=>console.log("DB Connected")).catch((err)=>console.log(err));
}