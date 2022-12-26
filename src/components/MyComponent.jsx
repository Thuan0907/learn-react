import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Minh Thuan", age: "28" },
//       { id: 2, name: "Nhat Hy", age: "18" },
//       { id: 3, name: "Kin", age: "30" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log(userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUserClone,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfo
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Minh Thuan", age: "28" },
    { id: 2, name: "Nhat Hy", age: "18" },
    { id: 3, name: "Kin", age: "30" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
  };
  return (
    <>
      //{" "}
      <div>
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <br />
        <br />

        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </>
  );
};

export default MyComponent;
