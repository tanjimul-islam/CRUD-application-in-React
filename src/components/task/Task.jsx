import { FaStar } from "react-icons/fa";

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        {task.isFavorite ? <FaStar color="yellow" /> : <FaStar color="gray" />}
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 cursor-pointer "
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 cursor-pointer"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
