import mongoose from "mongoose";

const pageContentSchema = new mongoose.Schema({
    page:{
        type:String,
        enum:['about','contact','quality','hse'],
        required:true
    },
    paragraph:String, //about
    image:String, //about

    //contact info

    email:String,
    phone:String,
    location:String,
    workingHours:String,

    //pdf
    pdfUrl:String
})

export default mongoose.model('PageContent', pageContentSchema);
