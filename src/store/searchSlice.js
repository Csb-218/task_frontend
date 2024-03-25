import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        search:''
    },
    reducers:{
        searchByName(state,action){
            state.search = action.payload

        }
    }
})

export const SearchActions = searchSlice.actions
export default searchSlice