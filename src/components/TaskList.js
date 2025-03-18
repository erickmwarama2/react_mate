import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ title }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record lectures", completed: true },
    { id: 2, name: "Edit lectures", completed: false },
    { id: 3, name: "Watch lectures", completed: false },
  ]);
  function handleDelete(id) {
    // console.log(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>Task List {title} </h1>
      <ul>
        {tasks.map(({ id, name, completed }) => (
          <TaskCard key={id} id={id} name={name} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};
