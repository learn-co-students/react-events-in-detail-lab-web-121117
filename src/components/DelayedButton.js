import React from 'react'

export default class DelayedButton extends React.Component {
  addDelay = (event) => {
    setTimeout(() => {
       this.props.onDelayedClick(event);
     }, this.props.delay);
     event.persist()
   }

  render() {
    return (
      <button onClick={this.addDelay}>Click Me</button>
    )
  }
}
