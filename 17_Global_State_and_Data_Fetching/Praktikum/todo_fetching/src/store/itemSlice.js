import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import APITodo from "../apis/todo.api";
import { v4 as uuidv4 } from 'uuid';

export const fetchTodo = createAsyncThunk("fetch/todos", async () => {
    try {
        const response = await APITodo.getAllProduct();
        return response.data;
    } catch (err) {
        console.log(err);
    }
})
export const createTodo = createAsyncThunk("create/todos", async () => {
    try {
        const response = await APITodo.createTodo();
        return response.data.insert_todos_todos;
    } catch (err) {
        console.log(err);
    }
})
export const updateTodo = createAsyncThunk("update/todos", async (data) => {
    try {
        const response = await APITodo.updateTodo(data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
})
export const deleteTodo = createAsyncThunk("delete/todos", async (data) => {
    try {
        const response = await APITodo.deleteTodo(data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
})

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const itemSlice = createSlice ({
    name: "todos",
    initialState,
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
    },
        extraReducers(builder) {
            builder
                .addCase(fetchTodo.pending, (state, action) => {
                    state.status = "loading";
                })
                .addCase(fetchTodo.fulfilled, (state, action) => {
                    state.status = "succeded";
                    state.data = action.payload;
                })
                .addCase(fetchTodo.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
                })
                .addCase(updateTodo.fulfilled, (state, action) => {
                    state.status = "succeded";
                })
                .addCase(createTodo.fulfilled, (state, action) => {
                    state.status = "succeded";
                    state.data.push(action.payload)
                    state.error = action.error.message;
                });
        },
})

export const { hapusListTodo, tambahListTodo, completeTodo} = itemSlice.actions
export default itemSlice.reducer