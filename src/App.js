import React, { useEffect, useState } from "react";

function App({ initialTasks }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(initialTasks || window._initialtasks_ ||  []);

  function addTodo(e) {
    if(task) {
      setTasks([...tasks, { id: tasks.length + 1, title: task}]);
      setTask("");
    }
  }

  // async function downloadTodos() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const data = await response.json();
  //   setTasks(data);
  // }


  useEffect(()=> {
    // downloadTodos();
    console.log("Initial tasks", initialTasks);
  }, [initialTasks]);


  return (
    <div>
      <h1>ToDo App</h1>
      <input type="text" placeholder="Add a task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
