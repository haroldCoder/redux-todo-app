import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface taskType {
    name: string,
    status: boolean,
    date: Date
}

interface todoType {
    tasks: Array<taskType>
}

const Todos: todoType = {
    tasks: []
}

export interface update{
    status: boolean,
    id: number
}

const todoSlice = createSlice({
    name: "todo",
    initialState: { tasks: Todos.tasks, update: <update>({status: false, id: 0})},
    reducers: {
        addTask(state, action: PayloadAction<taskType>) {
            state.tasks.push({
                name: action.payload.name,
                date: action.payload.date,
                status: action.payload.status
            });
        },
        deleteTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
        },
        updateTask(state, action: PayloadAction<{newtask: taskType, id: number}>) {
            state.tasks[action.payload.id] = action.payload.newtask;
        },
        modifyUpdate(state, action: PayloadAction<update>){
            state.update = action.payload;
        }
    }
})

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;