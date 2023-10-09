import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export class UserService {
  static searchAndPaging = createAsyncThunk("user/search", async () => {
    const response = await axiosClient.get(
      `user/search?keysearch=Abb&pagenumber=1&pagesize=10`
    );
    return response.data;
  });
}
