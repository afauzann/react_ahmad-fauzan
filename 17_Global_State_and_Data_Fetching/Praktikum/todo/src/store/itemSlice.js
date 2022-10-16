import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true

    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false
    }
]

export const itemSlice = createSlice ({
    name: "todo",
    initialState: {
        items: initialValue
    },
    reducers:{
        hapusListTodo: (state, action) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload;
            })
        },

        tambahListTodo: (state, action) => {
            const newTodo = {
                id : uuidv4(),
                ...action.payload
            }
            state.items = [...state.items, newTodo]
        },

        completeTodo: (state, action) => {
            const completeHandler = state.items.map((item) => 
            (item.id === action.payload ? 
            { ...item, completed: !item.completed } : item));
              state.items = completeHandler
        },
    }
})

export const { hapusListTodo, tambahListTodo, completeTodo} = itemSlice.actions
export default itemSlice.reducer