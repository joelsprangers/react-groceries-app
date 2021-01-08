import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: [
        { id: 1, title: "LAKSHMI" },
        { id: 2, title: "Ionnalee" },
        { id: 3, title: "Nils Frahm" },
      ],
      shoppingListItems: [
        { id: 100, title: "BLACKPINK" },
        { id: 200, title: "Billie Eilish" },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleClick(event) {
    let itemId = event.target.id;
    let newItem = this.state.groceryItems.filter(
      (item) => item.id === parseInt(itemId)
    );

    this.setState((prevState) => {
      let shoppingCart = [...prevState.shoppingListItems];
      shoppingCart.push(newItem[0]);
      let newState = { ...prevState, shoppingListItems: shoppingCart };
      return newState;
    });
  }

  handleButton(event) {
    this.setState((prevState) => {
      let newState = { ...prevState, shoppingListItems: [] };
      return newState;
    });
  }

  render() {
    return (
      <div className="Container">
        <GroceryList
          itemList={this.state.groceryItems}
          onClick={this.handleClick}
        />
        <ShoppingCart
          itemList={this.state.shoppingListItems}
          onClick={this.handleButton}
        />
      </div>
    );
  }
}

export default Container;
