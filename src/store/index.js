import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/store/user/userSlice.js';

export default configureStore({
  reducer: {
    user: userSlice
  }
});