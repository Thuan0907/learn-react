import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Minh Thuan", age: "28" },
      { id: 2, name: "Nhat Hy", age: "18" },
      { id: 3, name: "Kin", age: "30" },
    ],
  };

  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
