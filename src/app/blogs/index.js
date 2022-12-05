import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, deleteRequest, putRequest, postRequest } from "../apis";

// GET BLOGS
const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (token, thunkAPI) => {
  try {
    const response = await getRequest("admin/blogs", token);

    return response;
  } catch (error) {
    if (error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

// DELETE BLOG
const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (data, thunkAPI) => {
  const { blogId, token } = data;

  try {
    const response = await deleteRequest(`admin/blog/${blogId}`, token);

    return response;
  } catch (error) {
    if (error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

// CREATE BLOG
const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async ({ data, token }, thunkAPI) => {
    try {
      const { data: res } = await postRequest("admin/blog", data, token);

      return res;
    } catch (error) {
      if (error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// BLOG SLICE
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    deleting: false,
    error: null,
    blogs: [],
    blog: {},
  },

  // REDUCERS
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.data?.data?.blogs;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteBlog.pending, (state, action) => {
        state.deleting = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.deleting = false;
        state.blogs = state.blogs.filter(
          (item) => item._id !== action.payload.data?.data?.blog._id
        );
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      })
      .addCase(createBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = [...state.blogs, action.payload.data?.blog];
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// EXPORT SLICE
const { actions, reducer } = blogSlice;
export { actions, reducer, fetchBlogs, deleteBlog, createBlog };
