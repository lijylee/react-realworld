import { createSlice } from '@reduxjs/toolkit';
import { getUserFromStorage } from '@/utils/storage.js';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: getUserFromStorage() || null
  },
  reducers: {
    setUser: (state, user) => {
      state.value = user;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;