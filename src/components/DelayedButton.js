import React from 'react'

class DelayedButton extends React.Component {

  state = {}

  handleClick = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}> Mothafuckin DelayedButton </button>
    );
  }
}

export default DelayedButton
