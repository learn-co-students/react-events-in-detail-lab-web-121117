import React from 'react'

export default class CoordinateButton extends React.Component {
  showCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return (
      <button onClick={this.showCoordinates}>Click Me!</button>
    )
  }
}
