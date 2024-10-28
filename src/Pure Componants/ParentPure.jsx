import React, { Component } from 'react'
import Pure from './Pure'
import Normal from './Normal'

export default class ParentPure extends Component {
    constructor(props) {
      super()
    
      this.state = {
         name:"Vijji"
      }
    }
    handleState =()=>{
        this.setState({
            name:"vijju"
        })
    }
  render() {
    console.log("Parent Pure Is Rendering");
    return (
        <>
        <Pure name={this.state.name}/><br /><br />
        <Normal name={this.state.name}/><br /><br />
        <button onClick={this.handleState}> Click Here To change Name</button>
        </>
    )
  }
}
