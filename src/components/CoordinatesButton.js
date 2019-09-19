// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
  clickMethod = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render(props) {
    return <button onClick={this.clickMethod}>Click Me</button>;
  }
}
