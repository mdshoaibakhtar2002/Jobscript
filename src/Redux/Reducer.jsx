import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    userDetails: {}
}

const appSlice = createSlice({
    name: "myApp",
    initialState,
    reducers: {
        Loading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})

export const {
    Loading,
    setUserDetails
} = appSlice.actions;
export default appSlice.reducer
