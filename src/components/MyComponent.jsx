import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Minh Thuan",
    address: "Nha Trang",
    age: 28,
  };

  handleClick(event) {
    console.log(">>> check event: ", event.target);

    this.setState({
      name: "Kin",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver(event) {
    // console.log(">>> check onMouseOver: ", event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
