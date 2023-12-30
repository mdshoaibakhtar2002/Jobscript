import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    Loader : false
}

const appSlice = createSlice({
    name : "myApp",
    initialState,
    reducers:{
        Loading : (state, action) =>{
            state.Loader = action.payload;
        }
    }
})

export const {
    Loading,
} = appSlice.actions;
export default appSlice.reducer
