import mongoose from "mongoose";


const careerApplicationSchema = new mongoose.Schema({
    jobTitle: String,
    name: String,
    email: String,
    phone: String,
    cvFile: String, // File path if uploaded
    message: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.model("CareerApplication", careerApplicationSchema);
  