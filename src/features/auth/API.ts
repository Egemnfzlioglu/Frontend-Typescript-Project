
import axios from "axios";

const baseURL = "http://localhost:5000"

const API = axios.create({ baseURL })

export const login = (formData: Login) => API.post("/users/login", formData)
export const register = (formData: Register) => API.post("/users/register", formData)




