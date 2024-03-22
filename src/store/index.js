import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import TodoSlice from "./TodoSlice";

const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        todo : TodoSlice.reducer
    }
})

export default store