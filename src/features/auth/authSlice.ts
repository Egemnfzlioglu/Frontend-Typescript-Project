import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { login, register } from "../createThunk/authResponseThunk"

type LOGİN_SUCCESS = PayloadAction<any, string, {
  arg: LoginSlice;
  requestId: string;
  requestStatus: "fulfilled";
}, never>
type LOGİN_FAILURE = PayloadAction<any>

type REGİSTER_FAILURE = PayloadAction<any>
type REGİSTER_SUCCESS = PayloadAction<any, string, {
  arg: RegisterSlice;
  requestId: string;
  requestStatus: "fulfilled";
}, never>

const localStorageParse = JSON.parse(`${localStorage.getItem("profile")}`);
const localStorageRemove = () => localStorage.removeItem("profile")

const initialState: InitialStateAuth = {
  user: null,
  error: {
    message: "",
  },
  status: "idle",
  loginJSON: localStorageParse,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      localStorageRemove()
      state.user = null
    }
  },
  extraReducers: (builder) => {
    // LOGIN ===============================================================
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(login.fulfilled, (state, action: LOGİN_SUCCESS) => {
        state.status = 'idle';
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
        state.user = action.payload;
        state.error.message = ""
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
      .addCase(register.fulfilled, (state, action: REGİSTER_SUCCESS) => {
        state.status = 'idle';
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
        state.user = action.payload;
        state.error.message = ""
      })
      .addCase(register.rejected, (state, action: REGİSTER_FAILURE) => {
        state.status = 'failed';
        state.error = action.payload
      });
  },
});


export const selectCount = (state: RootState) => state.auth;

export const { setLogin, setLogout } = authSlice.actions;



export default authSlice.reducer;
