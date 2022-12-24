import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  render() {
    const myInfo = ["a", "b", "c"];
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name={"Minh Thuan"} age={28} myInfo={myInfo} />
        <hr />
        <DisplayInfo name="Minh Thuan" age="28" />
      </div>
    );
  }
}

export default MyComponent;
