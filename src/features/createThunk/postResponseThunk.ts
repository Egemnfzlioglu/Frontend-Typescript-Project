import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess } from '../../toast/toast';
import * as API from "../API/API"


export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ postData, navigate }: PostSlice,
        { rejectWithValue }
    ) => {
        try {
            const response = await API.createPost(postData)
            toastSuccess("Post Added Successfully")
            navigate("/")
            return response.data

        } catch (error: any) {
            console.log("error.response", error.response)
            return rejectWithValue(error.response.data)
        }
    });

export const getPosts = createAsyncThunk(
    "post/getPosts",
    async (_, { rejectWithValue }
    ) => {
        try {
            const response = await API.getPosts()
            return response.data

        } catch (error: any) {
            console.log("error.response", error.response)
            console.log("error.response", error.response.data)
            return rejectWithValue(error.response.data)
        }
    });































