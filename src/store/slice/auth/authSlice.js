import { createSlice } from '@reduxjs/toolkit'


//Al aumentar el contador de step cambiara o volvera para atras con total libertad
export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    modalState: false,
    type: null,
    user : null
   },
  reducers: {
    toggleAuthModal: (state , { payload})=>{
        state.modalState = payload
    },

    setAuthType : (state , { payload })=>{
      state.type = payload.type
      state.modalState = payload.modalState
    },
    setUser : (state , { payload })=>{
      state.user = payload
    },
    setUserByPropertie : (state , { payload })=>{

      if(state.user){
        state.user[payload.propertie] = payload.value
      }else{
        console.error('User not found')
      }
    }
}})





// Action creators are generated for each case reducer function
export const { toggleAuthModal  , setAuthType , setUser , setUserByPropertie} = authSlice.actions