import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // destructuring array/object
    const { name, age } = this.props; // props is object

    return (
      <div>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
