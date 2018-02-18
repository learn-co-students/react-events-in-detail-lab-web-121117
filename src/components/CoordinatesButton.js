import React from 'react'

export default class CoordinateButton extends React.Component {
  onReceiveCoordinates = (event) => {
    console.log([event.pageX, event.pageY])
  }

  render() {
    return (
      <button onClick={this.onReceiveCoordinates}>Click Me!</button>
    )
  }
}
