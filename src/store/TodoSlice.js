import { createSlice } from "@reduxjs/toolkit";
import { markComplete } from "../services/service";

const TodoSlice = createSlice({
    name : 'todo',
    initialState : {
       todoList:[]
    },
    reducers:{

        reset(state,action){
            state.todoList = []
        },

        select(state,action){
            state.todoList.push(action.payload)
        },

        unselect(state,action){

            const todo = action.payload
            state.todoList =  state.todoList.filter(item =>{
                 
                return todo._id !== item._id
            } )
        }


    }
})

export const TodoActions = TodoSlice.actions

export default TodoSlice