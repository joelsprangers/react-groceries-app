import React from "react";

const ListItem = (props) => (
  <li
    className="list-item"
    onClick={props.eventClick}
    key={props.id}
    value={props.name}
  >
    {props.title}
  </li>
);

export default ListItem;
