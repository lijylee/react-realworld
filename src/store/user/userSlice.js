import { createSlice } from "@reduxjs/toolkit";
import { getUserFromStorage } from "@/utils/storage.js";

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    value: getUserFromStorage() || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
