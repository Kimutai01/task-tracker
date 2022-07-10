import Task from "./Task";
const Tasks = ({ tasks, deleteTask, addReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          addReminder={addReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
