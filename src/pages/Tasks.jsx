/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { Card } from "antd";
import { getAlltasks } from "../services";
import { useQuery } from "@tanstack/react-query";
import CreateUpdateModal from "../component/CreateAndUpdate";
import { Avatar, Skeleton, Switch, Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";

import {
  AntDesignOutlined,
  EditOutlined,
  EllipsisOutlined,
  MessageOutlined,
  MoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Todo from "../component/Todo";
import { setTasks } from "../redux/reducer/todosReducer";

const Tasks = () => {
  const { todos } = useSelector((state) => state.todos);
  const [showEdit, setShowEdit] = useState(); //todo
  const dispatch = useDispatch();

  const handleShowEdit = (todo) => {
    setShowEdit(todo);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAlltasks,
  });
  
  useEffect(() => {
    const tasks = data?.map((todo) => ({ ...todo, inProgress: true }));

    dispatch(setTasks({ data: tasks }));
  }, [isLoading]);

  // List ALL tasks

  return (
    <div className="grid grid-cols-4 space-b-[12px]   gap-x-[12px] md:grid-cols-2  sm:grid-cols-1 ">
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          {showEdit && <CreateUpdateModal todo={showEdit} />}
          <Todo todos={todos} setShowEdit={handleShowEdit} />
        </>
      )}
    </div>
  );
};

export default Tasks;
