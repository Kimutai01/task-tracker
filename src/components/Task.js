import { FaTimes } from "react-icons/fa";
const Task = ({ task, deleteTask, addReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => addReminder(task.id)}
    >
      <h3>
        {task.title}{" "}
        <FaTimes
          onClick={() => deleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
