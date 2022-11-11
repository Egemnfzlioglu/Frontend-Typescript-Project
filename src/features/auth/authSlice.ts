import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';
import { login, register } from "../createThunk/authResponseThunk"

type LOGİN_SUCCESS = PayloadAction<{ results: any[] }>
type LOGİN_FAILURE = PayloadAction<any>

type REGİSTER_SUCCESS = PayloadAction<{ results: any[] }>
type REGİSTER_FAILURE = PayloadAction<any>



const initialState: initialStateProps = {
  user: null,
  error: {
    message: null
  },
  status: "idle",

};

console.log(initialState.error)
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // LOGIN ===============================================================
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(login.fulfilled, (state: initialStateProps, action: LOGİN_SUCCESS) => {
        state.status = 'idle';
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: LOGİN_FAILURE
      ) => {
        state.status = 'failed';
        state.error = action.payload

      });

    // REGISTER===============================================================
    builder.addCase(register.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(register.fulfilled, (state: initialStateProps, action: REGİSTER_SUCCESS) => {
        state.status = 'idle';
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action: REGİSTER_FAILURE
      ) => {
        state.status = 'failed';
        state.error = action.payload

      });
  },
});

// export const { } = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter;


export default authSlice.reducer;
