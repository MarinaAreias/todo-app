import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

export default function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={props.text} secondary="to-do" />
      </ListItem>
    </List>
  );
}
