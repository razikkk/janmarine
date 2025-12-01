import API from "../api/axios";

export const getPageContent = (page: string) =>
    API.get(`/admin/content/${page}`);
  
  export const upsertPageContent = (formData: FormData) =>
    API.post(`/admin/content`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  
  export const deletePageContent = (page: string) =>
    API.delete(`/admin/content/${page}`);

  export const getContactPage = () => API.get(`/admin/contact`);

// 🔹 Update or create contact page content
export const updateContactPage = (data: any) =>
  API.post(`/admin/contact`, data);

export const uploadPdf = (formData: FormData) =>
    API.post(`/admin/pdf`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  
  // Get PDF for a specific page (quality / hse)
  export const getPdf = (page: string) => API.get(`/admin/pdf/${page}`);


  export const getCareerListings = () =>
    API.get(`/admin/career-listings`);
  
  // ✅ Get single career listing
  export const getCareerListingById = (id:any) =>
    API.get(`/admin/career-listings/${id}`);
  
  // ✅ Create new job
  export const createCareerListing = (data:any) =>
    API.post(`/admin/career-listings`, data);
  
  // ✅ Update job
  export const updateCareerListing = (id:any, data:any) =>
    API.put(`/admin/career-listings/${id}`, data);
  
  // ✅ Delete job
  export const deleteCareerListing = (id:any) =>
    API.delete(`/admin/career-listings/${id}`);

  export const submitCareerApplication = (formData: FormData)=>
    API.post('/admin/career-application',formData,{
        headers:{"Content-Type":'multipart/form-data'}
    })

    export const getCareerApplications = ()=>
        API.get('/admin/career-application')

    export const addNews = (data:any)=>
        API.post('/admin/news/add',data)

    export const getNews = ()=>
        API.get('/admin/news')
    
    export const getNewsById = (id:any)=>
        API.get(`/admin/news/${id}`)

    export const updateNews = (id:any,data:any)=>
        API.put(`/admin/news/${id}`,data)

    export const deleteNews = (id:any)=>
        API.delete(`/admin/news/${id}`)

    // USER SIDE – user enters tracking number
export const trackShipment = (trackingNumber: string) =>
    API.get(`/tracking?tracking=${trackingNumber}`);  
  
  // ADMIN SIDE – search container / tracking status
  export const adminTrackShipment = (trackingNumber: string) =>
    API.get(`/tracking?tracking=${trackingNumber}`);
