import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    RootState,
    // AppThunk
} from '../../app/store';
import {
    createPost,
    getPosts
} from "../createThunk/postResponseThunk"

type CREATE_POST_SUCCESS = PayloadAction<any, string, {
    arg: PostSlice;
    requestId: string;
    requestStatus: "fulfilled";
}, never>
type POST_FAILURE = PayloadAction<unknown, string, {
    arg: PostSlice;
    requestId: string;
    requestStatus: "rejected";
    aborted: boolean;
    condition: boolean;
} & ({
    rejectedWithValue: true;
} | ({
    rejectedWithValue: false;
} & {}))>
// 
// type REGİSTER_FAILURE = PayloadAction<any>
// type REGİSTER_SUCCESS = PayloadAction<any, string, {
//   arg: RegisterSlice;
//   requestId: string;
//   requestStatus: "fulfilled";
// }, never>




const initialState: InitialStatePost = {
    post: {},
    posts: [],
    userPosts: [],
    error: {
        message: "",
    },
    status: "idle",
};

console.log("initialState.error", initialState.error)

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // createPost ===============================================================
        builder
            .addCase(createPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createPost.fulfilled, (state, action: CREATE_POST_SUCCESS) => {
                state.status = 'idle';
                state.posts = [action.payload]
                // state.posts = action.payload

            })
            .addCase(createPost.rejected, (state, action: POST_FAILURE
            ) => {
                state.status = 'failed';
                state.error = action.payload

            });

        // getPosts===============================================================
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload

            })
            .addCase(getPosts.rejected, (state, action
            ) => {
                state.status = 'failed';
                state.error = action.payload

            });
    },
});


export const selectCount = (state: RootState) => state.post;

// export const { } = postSlice.actions;





export default postSlice.reducer;



