import axios from "axios";
const ServerURL = "https://dummyjson.com/todos";

export const getAlltasks = async () => {
  const { data } = await axios.get(ServerURL);
  return data.todos;
};
