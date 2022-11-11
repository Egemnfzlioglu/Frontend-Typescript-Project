import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess } from '../../toast/toast';
import * as API from "../auth/API"



export const login = createAsyncThunk(
    "auth/login",
    async ({ values, navigate }: LoginSlice,
        { rejectWithValue }
    ) => {
        try {
            const response = await API.login(values)
            toastSuccess("Login Successfully")
            navigate("/")
            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    });


export const register = createAsyncThunk(
    "auth/register",
    async ({ value, navigate }: RegisterSlice,
        { rejectWithValue }
    ) => {
        try {
            const response = await API.register(value)
            toastSuccess("Login Successfully")
            navigate("/")
            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    });