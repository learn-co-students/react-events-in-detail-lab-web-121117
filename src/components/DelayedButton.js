import React from 'react';

export default class DelayedButton extends React.Component{
  // delayClick = (event) => {this.props.onDelayedClick}
  // let delay = 500
  click = (event) => {
    event.persist()
    setTimeout(()=>{
    this.props.onDelayedClick(event),
    this.props.delay})

  }
  render(){
    return (
    <button onClick={this.click}></button>
    )
  }
}
