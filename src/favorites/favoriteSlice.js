import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    faves:[ {
        breed: '',
        price: ''
    }]
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToList: (state, action) =>{
            state.faves.push(action.payload)
        },

        //not responding yet
        remove: (state, action)=>{
            state.faves.filter((ea)=>ea.breed !== action.payload)
        }

    }
})

export default favoriteSlice.reducer
export const {addToList, remove} = favoriteSlice.actions