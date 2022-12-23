import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Minh Thuan",
    address: "Nha Trang",
    age: 28,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
