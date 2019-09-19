// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  clickButton = (e) => {
    //This component takes in one prop: onReceiveCoordinates. This prop is a function. When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse.
    // Find these using the event data. The onReceiveCoordinates callback prop is then called with these coordinates
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render() {
    return (
      <button onClick={this.clickButton}>Click</button>
    );
  }
}
