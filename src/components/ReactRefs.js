import React, { Component } from 'react'

class UsingRefs extends Component{
    myRef=React.createRef();

    ComponentDidMount(){
        this.myRef.current.focus() //This will focus the current Element 
    }
    render(){
        return <input type="text" ref={this.myRef} />
    }

}