import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todoType{
    tasks: Array<string>
}

const Todos: todoType = {
    tasks: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState: {tasks: Todos.tasks},
    reducers: {
        addTask(state, action: PayloadAction<string>){
            state.tasks.push(action.payload);
        },
        deleteTask(state, action: PayloadAction<number>){
            state.tasks = state.tasks.filter((_, index)=> index !== action.payload);
        }
    }
})

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;