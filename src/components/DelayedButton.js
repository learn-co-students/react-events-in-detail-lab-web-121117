// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  clickButton = (e) => {
    // This component takes two props: onDelayedClick (a function), and delay (a number)
    // When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick()...
    e.persist()
    setTimeout(() => {
      // ...in a setTimeout() block.
      this.props.onDelayedClick(e)
      // The setTimeout() will be set to this.props.delay
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.clickButton}>Click</button>
    );
  }
}
