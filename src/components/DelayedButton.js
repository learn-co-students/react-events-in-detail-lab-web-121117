// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
  clickMethod = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render(props) {
    return <button onClick={this.clickMethod}>Delay Button</button>;
  }
}
