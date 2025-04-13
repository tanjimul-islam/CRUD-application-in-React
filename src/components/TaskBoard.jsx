import React from "react";
import Search from "./Search";
import TaskList from "./task/TaskList";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <Search />
        <TaskList />
      </div>
    </section>
  );
};

export default TaskBoard;
