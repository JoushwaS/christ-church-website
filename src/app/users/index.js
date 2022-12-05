import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../apis";

// USERS ACTIONS
const fetchUsers = createAsyncThunk("users/fetchUsers", async (token, thunkAPI) => {
  try {
    const response = await getRequest("admin/users", token);

    return response;
  } catch (error) {
    if (error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

// USERS SLICE
const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    users: [],
  },

  // REDUCERS
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.data?.data?.users;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// EXPORT SLICE
const { actions, reducer } = usersSlice;
export { actions, reducer, fetchUsers };
