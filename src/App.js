import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "./firebase";

function App() {
  //when the app loads we will listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this will load when when App.js loads
    //snapshot when it changes its like a camera that snaps it and it bring back to us
    db.collection("todos").onSnapshot((snapshot) => {
      //the docs is what gets added to the database. gets orgganized in collection and documents
      //so it allows us to read our database
      setTodos(snapshot.docs.map((doc) => doc.data().text)); // text is the name given in the database field
    });
  }, []);

  const [todos, setTodos] = useState([]);
  //created the hook in the input in order to conect the input to the piece of state
  const [input, setInput] = useState("");
  //to push it when we click the button
  const addTodo = (event) => {
    event.preventDefault();

    //now this will add to the db > fires snapshot >updates our todos
    db.collection("todos").add({
      todo: input,
      timestamp:
    });
    //...todos spreads the info given and push it from the input
    setTodos([...todos, input]);
    setInput(""); //clears the input after we enter
  };
  return (
    <div className="app">
      {/* we need to add onChange or it does not type */}
      {/* the <form> tag allows for accessibility */}
      <form>
        <FormControl>
          <InputLabel>✔ Write your to-do list</InputLabel>
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
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
