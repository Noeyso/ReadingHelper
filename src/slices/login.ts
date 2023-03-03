import { createSlice } from "@reduxjs/toolkit";

type LoginState = {
  isLogged: boolean,
  id: string|null,
  name: string|null,
  email:string|null,
}

const initialState:LoginState = {
  isLogged: false,
  id: null,
  name: null,
  email:null,
};

export const login = createSlice({
  name: "login",
  initialState,
  reducers:{
    onLoginStateChange : (state,action)=>{
      if(!action.payload){return {...state,id:null,name:null,email:null}};
      const {displayName,uid,email} = action.payload;
      return {...state,name:displayName,id:uid,email:email}
    }
  },
});

export const {onLoginStateChange} = login.actions;


export default login.reducer;