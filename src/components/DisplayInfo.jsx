import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>> call me render");
//     // destructuring array/object
//     const { listUsers } = this.props; // props is object

//     return (
//       <div className="display-info-container">
//         <div>
//           {true && (
//             <>
//               {listUsers.map((user) => {
//                 return (
//                   <div
//                     key={user.id}
//                     className={+user.age > 20 ? "greenyellow" : "red"}
//                   >
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                     <div>
//                       <button
//                         onClick={() => {
//                           this.props.handleDeleteUser(user.id);
//                         }}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                     <hr />
//                   </div>
//                 );
//               })}
//             </>
//           )}
//         </div>

//         <img src={logo} alt="" />
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {sShowHideListUser: true}

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you delete all the users");
    }
    console.log(">>> call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div>
        <div>
          <span onClick={() => handleShowHideListUser()}>
            {isShowHideListUser === true
              ? "Hide List Users"
              : "Show List Users"}
          </span>
        </div>
        {isShowHideListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className={+user.age > 20 ? "greenyellow" : "red"}
                >
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <div>
                    <button
                      onClick={() => {
                        props.handleDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>

      <img src={logo} alt="" />
    </div>
  );
};

export default DisplayInfo;
