import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
  render() {
    console.log(" Pure Is Rendering");
    return (
      <div>Pure : {this.props.name}</div>
    )
  }
}
