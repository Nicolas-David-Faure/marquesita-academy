import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
  menuDropdown: false,
};

export const activityBarSlice = createSlice({
  name: 'activityBarSlice',
  initialState,
  reducers: {
    setToggleMenuDropdown: (state, action) => {
      state.menuDropdown = action.payload;
    },
  },
});

export const { setToggleMenuDropdown } = activityBarSlice.actions;

