
//courses slice
import { createSlice } from '@reduxjs/toolkit'

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null,
    courseAdded: false

  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.status = 'success';
    },
    addError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    toggleCourseAdded: (state) => {
      state.courseAdded = !state.courseAdded;
    },
    
  }
})

export const { setCourses, addError , toggleCourseAdded   } = coursesSlice.actions;

export default coursesSlice;