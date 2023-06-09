import React, { useState } from "react";

function Applist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function remainingTasks() {
    const numCompleted = todos.filter(todo => todo.completed).length;
    const numRemaining = todos.length - numCompleted;
    return numRemaining;
  }

  return (
    <div className="Applist">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Tareas por hacer"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAddTodo}>Añadir Tarea</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Borrar</button>
          </li>
        ))}
        <p>{remainingTasks()} Tareas restantes</p>
      </ul>
    </div>
    
  );
}

export default Applist
