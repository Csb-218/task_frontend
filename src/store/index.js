import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import TodoSlice from "./TodoSlice";
import SideBarSlice from "./SideBarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        auth : AuthSlice.reducer,
        todo : TodoSlice.reducer,
        sidebar : SideBarSlice.reducer,
        search : searchSlice.reducer,
    }
})

export default store