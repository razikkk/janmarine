import mongoose from "mongoose";

const careerListingSchema = new mongoose.Schema({
    title:{type:String, required:true},
    location:String,
    type:String,//full or part
    description:String,
    requirements:[String]
})

export default mongoose.model('CareerListing', careerListingSchema)