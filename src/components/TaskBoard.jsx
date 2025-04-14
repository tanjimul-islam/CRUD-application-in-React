import { useState } from "react";
import Search from "./Search";
import TaskList from "./task/TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Task One",
    description:
      "Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker  ",
    tags: ["tag1", "tag2"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <Search />
        <TaskList tasks={tasks} />
      </div>
    </section>
  );
};

export default TaskBoard;
