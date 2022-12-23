import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Minh Thuan",
    address: "Nha Trang",
    age: 28,
  };

  handleClick(event) {
    console.log(">>> check event: ", event.target);
  }

  handleOnMouseOver(event) {
    console.log(">>> check onMouseOver: ", event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
