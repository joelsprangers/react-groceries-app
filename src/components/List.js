/* import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "apricorns" },
        { id: 2, title: "bananas" },
        { id: 3, title: "unicorns" },
      ],
    };
  }

  render() {
    return (
      <ul className="App-list">
        {this.state.groceryItems.map((item) => (
          <ListItem value={item} key={item.id} title={item.title} />
        ))}
      </ul>
    );
  }
}

export default List; */
