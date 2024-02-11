import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading : false
}

const appSlice = createSlice({
    name : "myApp",
    initialState,
    reducers:{
        Loading : (state, action) =>{
            state.isLoading = action.payload;
        }
    }
})

export const {
    Loading,
} = appSlice.actions;
export default appSlice.reducer
