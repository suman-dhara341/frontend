import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    isLoading: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.userData = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setAuth, setIsLoading } = authSlice.actions

export default authSlice.reducer