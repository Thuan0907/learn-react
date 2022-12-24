import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    // destructuring array/object
    const { listUsers } = this.props; // props is object

    return (
      <div className="display-info-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list Users"
              : "Show list Users"}
          </span>
          {this.state.isShowListUser && (
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
                          this.props.handleDeleteUser(user.id);
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
  }
}

export default DisplayInfo;
