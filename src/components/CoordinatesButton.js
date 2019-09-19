// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  handlesClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handlesClick}>Click Me!</button>
    )
  }
}

export default CoordinatesButton;
