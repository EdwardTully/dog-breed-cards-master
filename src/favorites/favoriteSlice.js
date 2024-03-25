import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    breed: []
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToList: (state, action) =>{
            state.breed.push(action.payload)
        },

        //when remove everything is removed, and crash occurs
        remove: (state, action)=>{
           return state.breed.filter((breed)=>breed !== action.payload)
        }

    }
})

export default favoriteSlice.reducer
export const {addToList, remove} = favoriteSlice.actions