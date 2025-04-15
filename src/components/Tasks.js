import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No Tasks To Show</p>;
  }

  return (
    <div className="space-y-3 mt-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
