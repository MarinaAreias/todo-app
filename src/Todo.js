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

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    //to be able to had another component that is not a List child we had this
    //called a react fragment
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <Button onClick={(event) => setOpen(false)}></Button>
        </div>
      </Modal>

      <List className="todo__list">
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          {/* bellow we have the todo object, passed on App.js and the todo text */}
          <ListItemText primary={props.todo.todo} secondary="to-do" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}> Edit </button>
        <DeleteIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}
