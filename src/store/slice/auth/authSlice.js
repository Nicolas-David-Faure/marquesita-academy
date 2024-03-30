import { createSlice } from '@reduxjs/toolkit'


//Al aumentar el contador de step cambiara o volvera para atras con total libertad
export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    modalState: false,
   },
  reducers: {
    toggleModal: (state , { payload})=>{
        state.modalState = payload
    }
}})





// Action creators are generated for each case reducer function
export const { toggleModal } = authSlice.actions