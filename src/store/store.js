import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/language/languages";
import { screenSlice } from "./slice/screen/screenSlice";
import { authSlice } from './slice/auth/authSlice'
export const store = configureStore({
    reducer: {
        languageSlice: languages.reducer,
        screenSlice: screenSlice.reducer,
        authSlice: authSlice.reducer
    },      
  })
