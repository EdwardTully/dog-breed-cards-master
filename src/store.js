import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './favorites/favoriteSlice'

const store = configureStore({
    reducer: {
        favorite: favoriteReducer
    }}
)

export default store