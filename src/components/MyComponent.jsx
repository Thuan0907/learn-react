import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Minh Thuan",
    address: "Nha Trang",
    age: 28,
  };

  // handleClick(event) {
  //   console.log(">>> check event: ", event.target);

  //   this.setState({
  //     name: "Kin",
  //     age: Math.floor(Math.random() * 100) + 1,
  //   });
  // }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // no load page
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
