import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
        hasError:false
        }
    }
    
    static getDerivedStateFromError()
    {
        return{hasError:true}
        
    }
    componentDidCatch(error,info){
        console.log(error,info);
    }

  render() {
    return (
      <>
      {this.state.hasError?<h1>somethong went wrong</h1>:this.props.children}
      </>
    )
  }
}
