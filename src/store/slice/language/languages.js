import { createSlice } from '@reduxjs/toolkit'


//Al aumentar el contador de step cambiara o volvera para atras con total libertad
export const languages = createSlice({
  name: 'languages',
  initialState:{
    language: 'es',
   },
  reducers: {
    setLanguage: (state , { payload})=>{
        state.language = payload
    }
}})





// Action creators are generated for each case reducer function
export const { setLanguage } = languages.actions