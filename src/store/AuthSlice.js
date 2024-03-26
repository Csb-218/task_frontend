import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name : 'auth',
    initialState : {
        name:null,
        email:null,
        picture:null,
        credential:null
    },
    reducers:{

        login(state,action){
            console.log(action)
            state.name = action.payload.name
            state.email = action.payload.email
            state.picture = action.payload.picture
            state.credential = action.payload.credential
        },

        logout(state,action){
            state.name = null
            state.email = null
            state.picture = null
            state.credential = null
        }
    }
})

export const AuthActions = AuthSlice.actions

export default AuthSlice