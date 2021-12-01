import { FaTrash } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`flex justify-between items-center bg-gray-100 p-3 my-3 ${
        task.reminder ? "border-l-4 border-yellow-600" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <h3 className="text-xl">{task.text}</h3>
        <p className="text-red-500">{task.day}</p>
      </div>
      <FaTrash
        onClick={() => onDelete(task.id)}
        className="w-5 h-5 md:w-7 md:h-7 cursor-pointer text-red-700 hover:text-red-500 transition duration-400 ease-in-out"
      />
    </div>
  );
};

export default Task;
