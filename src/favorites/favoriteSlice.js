import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    faves:[ {
        breed: 'dog',
        price: '0'
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
            console.log(action.payload)
            state.faves.filter((fav)=>fav.breed != action.payload)
        
            
        }

    }
})

export default favoriteSlice.reducer
export const {addToList, remove} = favoriteSlice.actions