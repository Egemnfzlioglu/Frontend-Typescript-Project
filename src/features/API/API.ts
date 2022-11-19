
import axios, { AxiosResponse } from "axios";

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
export const getPost = (id: string | undefined) => API.get(`/post/${id}`)
export const deletePost = (id: string | undefined) => API.delete(`/post/${id}`)

export const updatePost: any = (id: { id: string | undefined; postData: { description: string; title: string; tags: string[]; imageFile: string; name: string; creator: string; }; }, postData: undefined): Promise<AxiosResponse<any, any>> =>
    API.patch(`/post/${id}`, postData)

export const getPostsByUser = (userId: string | undefined) => API.get(`/post/userPost/${userId}`)
export const createPost = (postData: Post) => API.post("/post", postData)

