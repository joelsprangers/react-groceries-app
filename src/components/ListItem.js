import React from "react";

const ListItem = (props) => (
  <li
    className="list-item"
    onClick={props.eventClick}
    key={props.id}
    id={props.id}
    value={props.value}
  >
    {props.title}
  </li>
);

export default ListItem;
