//courses slice
import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    status: "idle",
    error: null,
    courseAdded: false,
    video: {
      videoUploadingStatus: false,
      videoUploadingPercentage: 0,
      videoName: "",
      videoID: "",
      videoModuleID: "",
    },
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.status = "success";
    },
    addError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    toggleCourseAdded: (state) => {
      state.courseAdded = !state.courseAdded;
    },
    setVideoUploadingVideo: (state, { payload }) => {
      state.video = {
        ...state.video,
        videoUploadingPercentage: payload.percentage,
        videoUploadingStatus: payload.status,
        videoName: payload.fileName
      };
    },
  },
});

export const {
  setCourses,
  addError,
  toggleCourseAdded,
  setVideoUploadingVideo,
} = coursesSlice.actions;

export default coursesSlice;
