import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take trash out",
    "buy groceries",
    "get sun on my face",
  ]);
  //created the hook in the input in order to conect the input to the piece of state
  const [input, setInput] = useState("");
  //to push it when we click the button
  const addTodo = (event) => {
    event.preventDefault();
    //...todos spreads the info given and push it from the input
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="app">
      <h1>hello</h1>
      {/* we need to add onChange or it does not type */}
      {/* the <form> tag allows for accessibility */}
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add to-do
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
