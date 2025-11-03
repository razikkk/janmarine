import express from 'express'
import { adminLogin, createCareerListing, deleteCareerListing, deletePageContent, getAllCareerListings, getCareerApplications, getCareerListingById, getContactPage, getPageContent, getPdf, submitCareerApplication, updateCareerListing, updateContactPage, uploadPdf, upsertPageContent } from '../controller/adminController.js'
import upload from '../middleware/upload.js'

const router = express.Router()

router.post('/login',adminLogin)
router.post('/content',upload.single('image'),upsertPageContent)
router.get('/content/:page',getPageContent)
router.delete('/content/:page',deletePageContent)

router.post('/contact',updateContactPage)
router.get('/contact',getContactPage)


router.post("/pdf", upload.single("pdf"), uploadPdf);
router.get("/pdf/:page", getPdf);

router.get("/career-listings", getAllCareerListings);
router.get("/career-listings/:id", getCareerListingById);
router.post("/career-listings", createCareerListing);
router.put("/career-listings/:id", updateCareerListing);
router.delete("/career-listings/:id", deleteCareerListing);

router.post("/career-application", upload.single("cvFile"), submitCareerApplication);
router.get("/career-application", getCareerApplications);


export default router