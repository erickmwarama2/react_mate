import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
  }

  function handleSub() {
    setCount((count) => count - 1);
  }

  return (
    <div className="App">
      <Header />
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          SUB
        </button>
      </div>
      <TaskList title="Random" />
    </div>
  );
}

export default App;
