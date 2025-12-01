import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title:{type:String, required:true},
    date:{type:Date, required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    excerpt:{type:String,required:true},
    featured:{type:Boolean, default:false}
},{timestamps:true})

export default mongoose.model('News',newsSchema)