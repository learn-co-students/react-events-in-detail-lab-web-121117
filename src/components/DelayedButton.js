import React from 'react';

class DelayedButton extends React.Component {

  thing = (event) => {
    setTimeout(function(){ return this.props.onDelayedClick(event) }.bind(this),this.props.delay)
    event.persist();
  }

  render(){
    return(
      <button onClick={this.thing} >Click me!</button>
    )
  }
}

export default DelayedButton;
