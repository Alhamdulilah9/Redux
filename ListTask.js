// ListTask.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../redux/actions";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTasks(filter));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "done" ? task.isDone : filter === "not" ? !task.isDone : true
  );

  return (
    <div>
      <div>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("done")}>Done</button>
        <button onClick={() => handleFilter("not")}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
