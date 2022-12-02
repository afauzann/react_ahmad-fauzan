import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";

const reducer = combineReducers({
  users: usersSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
