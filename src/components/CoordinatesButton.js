import React from 'react';

class CoordinatesButton extends React.Component {

  thing = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.thing}>Click me!</button>
    )
  }
}

export default CoordinatesButton;
