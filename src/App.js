import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      day: "Feb 6th at 2.30pm",
      reminder: false,
    },
    {
      id: 2,
      title: "Task 2",
      day: "Feb 7th at 2.30pm",
      reminder: true,
    },
    {
      id: 3,
      title: "Task 3",
      day: "Feb 9th at 2.30pm",
      reminder: true,
    },
  ]);
  const addTask = (task) => {
    const id = tasks.length + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          addReminder={addReminder}
        />
      ) : (
        <h1>No tasks</h1>
      )}
    </div>
  );
}

export default App;
