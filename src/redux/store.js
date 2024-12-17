import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import moviesReducer from './movieSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})