import { useState } from "react";
import Search from "./Search";
import AddTaskModal from "./task/AddTaskModal";
import TaskAction from "./task/TaskAction";
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
  const [showModal, setShowModal] = useState(false);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };
  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <Search />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
