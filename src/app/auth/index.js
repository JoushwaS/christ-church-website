import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequest, putRequest } from "../apis";

// LOGIN ACTION WITH ASYNC THUNK
const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await postRequest("admin/login", data);

    return response.data;
  } catch (error) {
    if (error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    } else {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

// UPDATE PASSWORD ACTION WITH ASYNC THUNK
const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ data, token }, thunkAPI) => {
    try {
      const { data: res } = await putRequest("admin/update/me", data, token);
      return res;
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// CREATE SLICE
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },

  // REDUCERS
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.loading = false;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// EXPORT SLICE
const { actions, reducer } = authSlice;
export const { logout } = actions;
export { login, updatePassword, actions, reducer };
