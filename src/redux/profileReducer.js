import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name:"profile",
  initialState:{
    token: null,
    profile: null,
    value : false,
  },
  reducers:{
    setProfile:(state,action)=>{
      state.profile=action.payload;
    },
    setToken:(state,action)=>{
      state.token=action.payload;
    },
    logout:(state)=>{
      localStorage.removeItem("token");
      state.token=null;
    },
    toggleValue:(state)=>{
      state.value= !state.value;
    }

  },
});



export const { setProfile, setToken, logout, toggleValue } = profileSlice.actions;
export default profileSlice.reducer;

