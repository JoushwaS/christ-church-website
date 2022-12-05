import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis";

//HOME ACTIONS
const fetchHome = createAsyncThunk("home/fetchHome", async (token, thunkAPI) => {
  try {
    const response = await getRequest("admin/statistics", token);

    return response;
  } catch (error) {
    if (error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

// HOME SLICE
const homeSlice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },

  // REDUCERS
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHome.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHome.fulfilled, (state, action) => {
        state.data = action.payload.data?.data;
        state.loading = false;
      })
      .addCase(fetchHome.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// EXPORT SLICE
const { actions, reducer } = homeSlice;

export { actions, reducer, fetchHome };
