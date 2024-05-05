import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setTasks = createAsyncThunk("todos/setTasks", ({ data }) => {
  return data;
});
export const getTask = createAsyncThunk("todos/getTasks", (data) => {
  return data;
});

export const updateTask = createAsyncThunk(
  "todos/updateTask",
  ({ newTodo }) => {
    return newTodo;
  }
);
export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  ({ todo }) => {
    return todo;
  }
);
const todosReducer = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    users: [],
    loading: false,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(setTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(setTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.concat(action.payload);
      })

      .addCase(getTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTask.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getTask.fulfilled, (state) => {
        state.loading = false;
        state.todos;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTodos = state.todos.map((todo) => {
          if (todo?.id === action?.payload?.id) {
            return { ...todo, ...action.payload };
          } else {
            return todo;
          }
        });

        state.todos = updatedTodos;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;

        state.todos = state.todos.filter(
          (todo) => todo?.id !== action?.payload?.id && todo
        );
      });
  },
});
export default todosReducer.reducer;
