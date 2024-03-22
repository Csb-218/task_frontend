import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'todo',
    initialState : {
       todoList:[]
    },
    reducers:{

        delete(state,action){

        },

        completed(state,action){

        },

        

        select(state,action){
            console.log(action,state)
           state.todoList.push(action.payload)
        },

        unselect(state,action){
            console.log(action,state)
            const id = action.payload
            state.todoList =  state.todoList.filter(item => id !== item)
        }


    }
})

export const TodoActions = TodoSlice.actions

export default TodoSlice