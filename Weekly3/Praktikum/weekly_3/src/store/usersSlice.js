import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApis from "../configs/apis/UserApis";

export const fetchUser = createAsyncThunk("fetch/fetchUser", async () => {
  try {
    const response = await UserApis.getUser();
    return response;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
