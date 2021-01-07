import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [
        { id: 1, title: "groceryList apricorns" },
        { id: 2, title: "bananas" },
        { id: 3, title: "unicorns" },
      ],
      shoppingListItems: [
        { id: 1, title: "shoppingList apricorns" },
        { id: 2, title: "bananas" },
        { id: 3, title: "unicorns" },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let item = event.target;
    let itemObj = item.getAttribute("value");
    console.log(itemObj);
    // hier moet het item object worden toegevoegd

    this.setState((prevState) => {
      const newShoppingList = [...prevState.shoppingListItems];
      newShoppingList.push({
        id: newShoppingList.length + 1,
        title: "hier moet het goede item komen",
      });
      const newState = { ...prevState, shoppingListItems: newShoppingList };
      console.log(newState);
      return newState;
    });
  }

  render() {
    return (
      <div className="Container">
        <ShoppingCart itemList={this.state.shoppingListItems} />
        <GroceryList
          onClick={this.handleClick}
          itemList={this.state.groceryItems}
        />
      </div>
    );
  }
}

export default Container;
