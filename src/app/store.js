import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth";
import { reducer as homeReducer } from "./home";
import { reducer as usersReducer } from "./users";
import { reducer as blogsReducer } from "./blogs";

// CREATE STORE
const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    users: usersReducer,
    blogs: blogsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

// EXPORT STORE
export default store;
