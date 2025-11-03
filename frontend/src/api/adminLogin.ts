import API from "../api/axios";

interface AdminLoginData {
  email: string;
  password: string;
}

export const adminLogin = (data: AdminLoginData) => API.post("/admin/login", data);