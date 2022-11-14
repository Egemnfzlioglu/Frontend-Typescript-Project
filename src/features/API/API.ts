
import axios from "axios";

const baseURL = "http://localhost:5000"

const TOKEN = JSON.parse(`${localStorage.getItem("profile")}`)

const API = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
});

if (TOKEN !== "") {
    API.interceptors.request.use((req: any) => {
        if (TOKEN) {
            req.headers.Authorization = `Bearer ${TOKEN.token}`;
        }
        return req;
    })
}

export const login = (formData: Login) => API.post("/users/login", formData)
export const register = (formData: Register) => API.post("/users/register", formData)


export const getPosts = () => API.get("/post")
export const createPost = (postData: Post) => API.post("/post", postData)

