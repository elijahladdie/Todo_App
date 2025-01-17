import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducer/todosReducer";
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;


/**
 * .
 * const {todos, users} = useSelector((state)=> state.todos)
 */