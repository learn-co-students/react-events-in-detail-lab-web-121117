import React from 'react'

class CoordinatesButton extends React.Component {

  state = {}

  handleClick = (e) => {
    let coordinates = [e.screenX, e.screenY]
    console.log(coordinates)
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Mothafuckin Coordinates Button</button>
    );
  }
}

export default CoordinatesButton
