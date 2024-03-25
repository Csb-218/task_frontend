import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name : 'sideBar',
    initialState : {
       active:'all'
    },
    reducers:{

        select(state,action){
            // console.log(action,state)
            state.active = action.payload
        },
    }
})

export const SideActions = SideBarSlice.actions

export default SideBarSlice