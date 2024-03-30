import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
  screenWidth: null,
};

export const screenSlice = createSlice({
  name: 'screenSlice',
  initialState,
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setScreenWidth } = screenSlice.actions;

