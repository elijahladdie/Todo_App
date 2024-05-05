/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { connect, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todos";
import {
  deleteTask,
  getTask,
  setTasks,
  updateTask,
} from "../redux/reducer/todosReducer";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const CreateUpdateModal = ({ todo }) => {
  const [title, setTitle] = useState("");
  const { t } = useTranslation();

  const [status, setStatus] = useState("todo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    const arr = [];
    arr.push(todos);
    const newTodo = {
      id: Date.now(),
      todo: title,
      completed: status === "complete",
      inProgress: status === "pending",
    };
    arr.unshift(newTodo);

    if (todo) {
      const updatedTodo = { ...newTodo, id: todo.id };
      dispatch(updateTask({ newTodo: updatedTodo }));
    }
    dispatch(setTasks({ data: arr }));
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (todo) {
      setIsModalOpen(true);
    }
  }, [todo]);

  return (
    <>
      {!todo && (
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {t("content.addNewTask")}
        </button>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:text-black bg-rounded-lg p-8 max-w-md w-full">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                onChange={handleTitleChange}
                className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
                defaultValue={todo?.todo ??  title }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-bold mb-2"
              >
                Status:
              </label>
              <select
                id="status"
                onChange={handleStatusChange}
                className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
                defaultValue={todo?.completed ?? todo?.inProgress}
              >
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className="flex justify-between w-full">
              <button
                onClick={() => {
                  dispatch(deleteTask({ todo }));
                  toggleModal();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Delete
              </button>
              <div className="flex justify-end gap-[20px]">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  onClick={toggleModal}
                  className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CreateUpdateModal;
