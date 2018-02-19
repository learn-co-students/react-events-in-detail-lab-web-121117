// Code CoordinatesButton Component Here

import React from "react";

class CoordinatesButton extends React.Component {
  handleClick = event => {
    let coordinates = [event.screenX, event.screenY];
    this.props.onReceiveCoordinates(coordinates);
  };

  render(props) {
    return <button onClick={this.handleClick}>Button</button>;
  }
}

export default CoordinatesButton;
