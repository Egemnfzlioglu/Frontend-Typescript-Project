import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
    createPost,
    getPosts,
    getPost,
    getPostsByUser,
    deletePost,
    updatePost
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

const initialState: InitialStatePost = {
    post: {
        createdAt: "",
        creator: "",
        description: "",
        imageFile: "",
        likeCount: 0,
        name: "",
        tags: [""],
        title: "",
        _id: "",

    },
    posts: [],
    userPosts: [],
    error: {
        message: "",
    },
    status: "idle",
};

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
        // getPost===============================================================
        builder
            .addCase(getPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.status = 'idle';
                state.post = action.payload
            })
            .addCase(getPost.rejected, (state, action
            ) => {
                state.status = 'failed';
                state.error = action.payload
            });
        // getPostsByUser===============================================================
        builder
            .addCase(getPostsByUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPostsByUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userPosts = action.payload
            })
            .addCase(getPostsByUser.rejected, (state, action
            ) => {
                state.status = 'failed';
                state.error = action.payload
            });
        // deletePost===============================================================
        builder
            .addCase(deletePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'idle';
                const { arg }: any = action.meta
                if (arg) {
                    state.userPosts = state.userPosts.filter(post => post._id !== arg);
                    state.posts = state.posts.filter(post => post._id !== arg);
                }
            })
            .addCase(deletePost.rejected, (state, action
            ) => {
                state.status = 'failed';
                state.error = action.payload
            });
        // updatePost===============================================================
        builder
            .addCase(updatePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'idle';
                const { arg }: any = action.meta
                if (arg) {
                    state.userPosts = state.userPosts.map(post =>
                        post._id === arg ? action.payload : post
                    );
                    state.posts = state.posts.map(post =>
                        post._id === arg ? action.payload : post
                    );
                }
            })
            .addCase(updatePost.rejected, (state, action
            ) => {
                state.status = 'failed';
                state.error = action.payload
            });
    },
});


export const selectCount = (state: RootState) => state.post;

// export const { } = postSlice.actions;





export default postSlice.reducer;



