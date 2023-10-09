import { createSlice } from "@reduxjs/toolkit";
import { UserService } from "../../services/user.service";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extraReducers: (builder) => {
    builder
      .addCase(UserService.searchAndPaging.pending, (state) => {
        state.status = "loading"; //trạng thái chờ load dữ liệu
      })
      .addCase(UserService.searchAndPaging.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload; // Đã có dữ liệu
      })
      .addCase(UserService.searchAndPaging.rejected, (state, action) => {
        state.status = "failed";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.error = action.error as any;
      });
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
