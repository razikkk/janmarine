import Admin from "../model/adminModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import PageContent from "../model/pageContent.js";
import CareerListing from "../model/careerListing.js";
import CareerApplication from "../model/careerApplication.js";
import newsModel from "../model/newsModel.js";


export const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // ✅ Direct password match (no hashing)
      if (password !== admin.password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { id: admin._id, email: admin.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
  
      res.status(200).json({
        message: "Login Successful",
        token,
        admin: { email: admin.email },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };


  export const upsertPageContent = async (req, res) => {
    try {
      const { page, paragraph } = req.body;
      let imageUrl = req.file ? req.file.path : undefined;
  
      // Check if content already exists
      const existing = await PageContent.findOne({ page });
  
      if (existing) {
        // Update existing content
        existing.paragraph = paragraph || existing.paragraph;
        if (imageUrl) existing.image = imageUrl;
        await existing.save();
        return res.status(200).json({ message: "Content updated", content: existing });
      }
  
      // Create new content
      const newContent = new PageContent({
        page,
        paragraph,
        image: imageUrl || "",
      });
  
      await newContent.save();
      res.status(201).json({ message: "Content added", content: newContent });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // ✅ Get page content
  export const getPageContent = async (req, res) => {
    try {
      const { page } = req.params;
      const content = await PageContent.findOne({ page });
      if (!content) return res.status(404).json({ message: "No content found" });
      res.status(200).json(content);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // ✅ Delete page content
  export const deletePageContent = async (req, res) => {
    try {
      const { page } = req.params;
      const content = await PageContent.findOneAndDelete({ page });
      if (!content) return res.status(404).json({ message: "Not found" });
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };


  export const updateContactPage = async(req,res)=>{
    try {
        const {email, phone, location, workingHours} = req.body
        let pageContent = await PageContent.findOne({page:'contact'})

        if(pageContent){
            pageContent.email = email
            pageContent.phone = phone
            pageContent.location = location
            pageContent.workingHours = workingHours
            await pageContent.save()
        }else{
            pageContent = await PageContent.create({
                page:'contact',
                email,
                phone,
                location,
                workingHours
            })
        }
        res.status(200).json({success:true,message:'contact page updated'}, pageContent)
    } catch (error) {
        console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
    }
  }
  
  export const getContactPage = async(req,res)=>{
    try {
        const pageContent = await PageContent.findOne({page:'contact'})
        res.status(200).json({success:true, pageContent})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false,message:'server error'})
    }
  }

  export const uploadPdf = async (req, res) => {
    try {
      const { page } = req.body;
  
      if (!["quality", "hse"].includes(page)) {
        return res.status(400).json({ success: false, message: "Invalid page type" });
      }
  
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No PDF uploaded" });
      }
  
      const pdfUrl = req.file.path || req.file.path?.url || req.file.url;
  
      let pageContent = await PageContent.findOne({ page });
  
      if (pageContent) {
        pageContent.pdfUrl = pdfUrl;
        await pageContent.save();
        return res.status(200).json({
          success: true,
          message: `${page} PDF updated successfully`,
          pageContent,
        });
      }
  
      pageContent = await PageContent.create({ page, pdfUrl });
      res.status(201).json({
        success: true,
        message: `${page} PDF uploaded successfully`,
        pageContent,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
  
  // ✅ Get PDF data for a page
  export const getPdf = async (req, res) => {
    try {
      const { page } = req.params;
  
      if (!["quality", "hse"].includes(page)) {
        return res.status(400).json({ success: false, message: "Invalid page type" });
      }
  
      const pageContent = await PageContent.findOne({ page });
  
      if (!pageContent) {
        return res.status(404).json({ success: false, message: "PDF not found" });
      }
  
      res.status(200).json({ success: true, pageContent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };



// ✅ Get all career listings
export const getAllCareerListings = async (req, res) => {
  try {
    const listings = await CareerListing.find().sort({ _id: -1 });
    res.status(200).json({ success: true, listings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ success: false, message: "Error fetching listings" });
  }
};

// ✅ Get a single job by ID
export const getCareerListingById = async (req, res) => {
  try {
    const listing = await CareerListing.findById(req.params.id);
    if (!listing)
      return res.status(404).json({ success: false, message: "Listing not found" });

    res.status(200).json({ success: true, listing });
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ success: false, message: "Error fetching listing" });
  }
};

// ✅ Create a new job listing
export const createCareerListing = async (req, res) => {
  try {
    const { title, location, type, description, requirements } = req.body;

    const newListing = new CareerListing({
      title,
      location,
      type,
      description,
      requirements: Array.isArray(requirements)
        ? requirements
        : requirements?.split(",").map((item) => item.trim()),
    });

    await newListing.save();
    res.status(201).json({ success: true, message: "Job created successfully" });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ success: false, message: "Error creating job" });
  }
};

// ✅ Update a job listing
export const updateCareerListing = async (req, res) => {
  try {
    const { title, location, type, description, requirements } = req.body;

    const updated = await CareerListing.findByIdAndUpdate(
      req.params.id,
      {
        title,
        location,
        type,
        description,
        requirements: Array.isArray(requirements)
          ? requirements
          : requirements?.split(",").map((item) => item.trim()),
      },
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ success: false, message: "Listing not found" });

    res.status(200).json({ success: true, message: "Job updated successfully" });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ success: false, message: "Error updating job" });
  }
};

// ✅ Delete a job listing
export const deleteCareerListing = async (req, res) => {
  try {
    const deleted = await CareerListing.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ success: false, message: "Listing not found" });

    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ success: false, message: "Error deleting job" });
  }
};


export const submitCareerApplication = async (req, res) => {
    try {
      const { jobTitle, name, email, phone, message } = req.body;
      const cvFile = req.file ? req.file.path : null; // only if using multer
  
      const newApplication = new CareerApplication({
        jobTitle,
        name,
        email,
        phone,
        message,
        cvFile,
      });
  
      await newApplication.save();
      res.status(200).json({ success: true, message: "Application submitted successfully!" });
    } catch (error) {
      console.error("Error saving application:", error);
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  };
  
  // Fetch all applications (for Admin)
  export const getCareerApplications = async (req, res) => {
    try {
        const applications = await CareerApplication.find().sort({ createdAt: -1 });
        res.status(200).json(applications);
      } catch (error) {
        console.error("Error fetching applications:", error);
        res.status(500).json({ message: "Error fetching applications", error });
      }
    
  };
  export const addNews = async (req, res) => {
    try {
      const { title, date, category, excerpt, featured } = req.body;
  
      const image = req.file ? req.file.path : null;
  
      const news = new newsModel({
        title,
        date,
        category,
        image,
        excerpt,
        featured,
      });
  
      await news.save();
      res.status(201).json({ success: true, message: "News added successfully", news });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const getAllNews = async (req, res) => {
    try {
      const newsList = await newsModel.find().sort({ date: -1 });
      res.status(200).json({ success: true, newsList });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const getNewsById = async (req, res) => {
    try {
      const news = await newsModel.findById(req.params.id);
      if (!news) return res.status(404).json({ success: false, message: "News not found" });
      res.status(200).json({ success: true, news });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const updateNews = async (req, res) => {
    try {
      const { id } = req.params;
      const data = { ...req.body };
  
      if (req.file) data.image = req.file.path; // update image if re-uploaded
  
      const updated = await newsModel.findByIdAndUpdate(id, data, { new: true });
      if (!updated) return res.status(404).json({ message: "News not found" });
  
      res.status(200).json({ message: "News updated", updated });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const deleteNews = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await newsModel.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: "News not found" });
      res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };

  export const trackContainer = async (req, res) => {
    try {
      const { tracking } = req.query;
  
      if (!tracking) {
        return res.status(400).json({ message: "Tracking number required" });
      }
  
      // BASIC AUTH (user:key → base64)
      const user = "admin_api";
      const key = "$espaB7u2#ug4g&t4c3-";
      const basicAuth = Buffer.from(`${user}:${key}`).toString("base64");
  
      // External API call
      const response = await axios.get(
        `http://janaip.mypsx.net:8069/api/v1/search?tracking=${tracking}`,
        {
          headers: {
            "Authorization": `Basic ${basicAuth}`,
            // add bearer only if required:
            // "Authorization": `Bearer YOUR_TOKEN`,
          }
        }
      );
  
      return res.json(response.data);
  
    } catch (error) {
      console.log(error.response?.data || error);
      return res.status(500).json({
        message: "Failed to fetch tracking details",
        error: error.message,
      });
    }
  };
  