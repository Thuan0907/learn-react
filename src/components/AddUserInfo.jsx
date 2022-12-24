import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "",
    address: "Nha Trang",
    age: "",
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // no load page

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
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
          <label htmlFor="">Your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />

          <label htmlFor="">Your age: </label>
          <input
            type="number"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfo;
