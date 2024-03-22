import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoggedIn:false
    },
    reducers:{

        login(state,action){
            state.isLoggedIn = true
        },

        logout(state,action){
            state.isLoggedIn = false
        }
    }
})

export const AuthActions = AuthSlice.actions

export default AuthSlice