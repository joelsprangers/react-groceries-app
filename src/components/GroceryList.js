import React from "react";
import ListItem from "./ListItem";

const GroceryList = (props) => {
  return (
    <div>
      <h3>agenda</h3>{" "}
      <input
        className="text-input grocery-list-add-item"
        type="text"
        placeholder="...add artist"
        onClick={props.onButton}
      />
      <ul className="item-list item-list__grocery">
        {props.itemList.map((item) => (
          <ListItem
            eventClick={props.onClick}
            key={item.id}
            value={item}
            id={item.id}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
//van class based naar function based gegaan omdat de state naar Container is verplaatst

/* class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "boodschap apricorns" },
        { id: 2, title: "boodschap bananas" },
        { id: 3, title: "boodschap unicorns" },
      ],
    };
  }

  render() {
    return (
      <ul className="item-list__grocery">
        {this.state.groceryItems.map((item) => (
          <ListItem value={item} key={item.id} title={item.title} />
        ))}
      </ul>
    );
  }
} */
