// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  // handleClick = (e) => {
  //   // console.log("X:", e.screenX, "Y:", e.screenY)
  //   const coordinates = [e.screenX, e.screenY]
  //   console.log(coordinates)
  // } // works in browser

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  } // works for tests

  render(){
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton;
