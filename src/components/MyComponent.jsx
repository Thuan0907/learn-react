import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Minh Thuan", age: "28" },
      { id: 2, name: "Nhat Hy", age: "18" },
      { id: 3, name: "Kin", age: "30" },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUsers];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };

  render() {
    return (
      <>
        <div>
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
      </>
    );
  }
}

export default MyComponent;
