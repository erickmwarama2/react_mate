import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record lectures", completed: true },
    { id: 2, name: "Edit lectures", completed: false },
    { id: 3, name: "Watch lectures", completed: false },
  ]);

  function handleAdd() {
    setCount((count) => count + 1);
  }

  function handleSub() {
    setCount((count) => count - 1);
  }

  function handleDelete(id) {
    // console.log(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          SUB
        </button>
      </div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(({ id, name, completed }) => (
          <li key={id}>
            <span>
              {id} - {name}
            </span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
