import React, { useState } from "react";

import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Modal,
  Button,
} from "@material-ui/core";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

//styling of Modal from material UI
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    //update the todo with new input text

    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
        //this prevents us from overwriting what was already in there
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    //to be able to had another component that is not a List child we had this
    //called a react fragment
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update</Button>
        </div>
      </Modal>

      <List className="todo__list">
        <ListItem>
          <ListItemIcon>
            <Checkbox color="primary" />
          </ListItemIcon>
          {/* bellow we have the todo object, passed on App.js and the todo text */}
          <ListItemText primary={props.todo.todo} secondary="to-do" />
        </ListItem>
        <button className="todo__edit-button" onClick={(e) => setOpen(true)}>
          {" "}
          Edit{" "}
        </button>
        <DeleteIcon
          color="primary"
          className="todo__icon"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}
