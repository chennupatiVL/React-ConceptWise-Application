import React, { Component } from 'react'

export default class Normal extends Component {
  render() {
    console.log("Normal Is Rendering");
    return (
      <div>Normal {this.props.name}</div>
    )
  }
}
