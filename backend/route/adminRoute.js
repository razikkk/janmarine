import express from 'express'
import { addNews, adminLogin, createCareerListing, deleteCareerListing, deleteNews, deletePageContent, getAllCareerListings, getAllNews, getCareerApplications, getCareerListingById, getContactPage, getNewsById, getPageContent, getPdf, submitCareerApplication, trackContainer, updateCareerListing, updateContactPage, updateNews, uploadPdf, upsertPageContent } from '../controller/adminController.js'
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

router.post('/news/add', upload.single('image'), addNews);
router.get('/news', getAllNews);
router.get('/news/:id', getNewsById);
router.put('/news/:id', upload.single('image'), updateNews);
router.delete('/news/:id', deleteNews);
router.get("/tracking", trackContainer);


export default router