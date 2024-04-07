import {configureStore, createStore} from "@reduxjs/toolkit";
import todoSlice from "./tasks-slice";

const reducerFn = (state: any = {tasks: ["task1"], count: 2}, action: any) =>{
    console.log(action);
    
    switch(action.type){
        case "ADD":
            return {count: state.count+1, tasks: [...state.tasks, `task${state.count}`]}
    }

    return state
}

// const store = createStore(reducerFn);
const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export default store;