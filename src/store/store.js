import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/appBook/languages";
import { screenSlice } from "./slice/screen/screenSlice";
import { authSlice } from './slice/auth/authSlice'
export const store = configureStore({
    reducer: {
        languages: languages.reducer,
        screenSlice: screenSlice.reducer,
        authSlice: authSlice.reducer
    },      
  })
