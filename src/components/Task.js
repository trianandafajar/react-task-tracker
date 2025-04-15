import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      className={`bg-white shadow p-4 mb-3 rounded-lg border-l-4 cursor-pointer transition ${
        task.reminder ? "border-green-500" : "border-transparent"
      } hover:shadow-md`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{task.text}</h3>
        <FaTimes
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p className="text-sm text-gray-600">{task.day}</p>
    </div>
  );
};

export default Task;
