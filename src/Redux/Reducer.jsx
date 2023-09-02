import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    Loader : false
}

const appSlice = createSlice({
    name : "myApp",
    initialState,
    reducers:{
        Loading : (state, action) =>{
            state.Loader = true
        },
        LoadingStop : (state, action) =>{
            state.Loader = false
        }
    }
})

export const {
    Loading, 
    LoadingStop
} = appSlice.actions;
export default appSlice.reducer
