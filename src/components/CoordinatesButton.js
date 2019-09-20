// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {




  clickHandler = (event) => {
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <button onClick={this.clickHandler}>hello</button>
    )
  }
}

export default CoordinatesButton;
