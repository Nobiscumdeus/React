import React, { Component } from 'react'


class ParentComponent extends Component
{
    constructor(props){
        suer(props)
        this.state={
            parentName: 'United States of America',
            daughterName: 'My beautiful daughter'
        }
        //We are binding the function in the constructor which is fine 
        this.greetParent=this.greetParent.bind(this)
        this.daughterName=this.daughterHandler.bind(this)
    }
    greetParent()
    {
        alert(`Hello ${this.state.parentName}`)  //`` the backticks here are template literals
    }
    daughterHandler(childName)
    {
        //Here we used the props supplied to DaughterComponent to pass a parameter from the Child to the Mother i.e 'childName'
        alert(`Hello ${this.state.daughterName} from ${childName}  `)
    }
    render(){
        return(
           <div>
            {/* For child component to use the greetParent() function we must pass it down 
            to the child component as props i.e property
            We are passing a method of the parent here to the Child 
            The attribute is 'greetHandler'
            The method is {this.greetHandler} and not {this.greetHandler()} since its a prop*/}
                <ChildComponent greetHandler={this.greetParent}  />
                <DaughterComponent daughterHandler={this.daughterHandler} />
                
            </div>
        )
    }
}

//Here lets us the functional component since we don't need state
//But note that we are trying to pass info from our Parent to the Child Component 

function ChildComponent(props) 
//We added props as a parameter, so the function can have access to all props passed in it.
{
    return(
        <div>
            <button onClick={props.greetHandler}>  Greet Parent </button>

        </div>
    )
}
//So here , the two components benefit from one another 
//The ChildComponent displays the button tag in the Parent Component
//Whereas the Parent Compoent supplies its function greetHandler to the Child for it to display hello...


function DaughterComponent(){
    return(
        <div>
            <button onClick={()=>props.daughterHandler('Atinuke')}> Greet my Mother </button>
            {/* here we are simply passing the parameter as props to the mother */}
        </div>
    )
}

export default ParentComponent 

