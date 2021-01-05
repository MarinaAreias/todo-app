import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";

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
    setInput(""); //clears the input after we enter
  };
  return (
    <div className="app">
      <h1>hello</h1>
      {/* we need to add onChange or it does not type */}
      {/* the <form> tag allows for accessibility */}
      <form>
        <FormControl>
          <InputLabel>Write your to-do list</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          //so it does not add if input is empty
          disabled={!input}
        >
          Primary
        </Button>
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
