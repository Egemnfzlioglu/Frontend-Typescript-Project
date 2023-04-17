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
            return rejectWithValue(error.response.data)
        }
    });

export const getPost = createAsyncThunk(
    "post/getPost",
    async (id: string | undefined, { rejectWithValue }
    ) => {
        try {
            const response = await API.getPost(id)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    });

export const getPostsByUser = createAsyncThunk(
    "post/getPostsByUser",
    async (userId: string | undefined, { rejectWithValue }
    ) => {
        try {
            const response = await API.getPostsByUser(userId)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    });

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (id: string | undefined, { rejectWithValue }
    ) => {
        try {
            const response = await API.deletePost(id)
            toastSuccess("Post Deleted Successfully")
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    });

export const updatePost = createAsyncThunk(
    "post/updatePost",
    async ({ id, postData }: any,
        { rejectWithValue }
    ) => {
        try {
            const response = await API.updatePost(id, postData)
            toastSuccess("Post Updated Successfully")
            return response.data
        } catch (error: any) {
            console.log("error.response", error.response)
            console.log("error.response", error.response.data)
            return rejectWithValue(error.response.data)
        }
    });




























