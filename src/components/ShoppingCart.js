import React from "react";
import ListItem from "./ListItem";

const ShoppingCart = (props) => {
  return (
    <ul className="item-list__cart">
      {props.itemList.map((item) => (
        <ListItem value={item} key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default ShoppingCart;
//van class based naar function based gegaan omdat de state naar Container is verplaatst

/* class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "winkelwagen apricorns" },
        { id: 2, title: "winkelwagen bananas" },
        { id: 3, title: "winkelwagen unicorns" },
      ],
    };
  }

  render() {
    return (
      <ul className="item-list__cart">
        {this.state.groceryItems.map((item) => (
          <ListItem value={item} key={item.id} title={item.title} />
        ))}
      </ul>
    );
  }
} */
