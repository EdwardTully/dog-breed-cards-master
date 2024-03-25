import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './favorites/favoriteSlice'

const store = configureStore({
    reducer: {
        favorites: favoriteReducer
    }}
)

export default store