import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions