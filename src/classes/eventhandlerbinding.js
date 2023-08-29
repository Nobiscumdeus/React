import React , { Component } from 'react'


class EventBindOne extends Component
{
    constructor(props){
        super(props)
        this.state={
            message:'Hello' //Lets change message to Goodbye when the use clicks the button 
        }
    }

    clickHandler(){
        this.setState({
            message:'Goodbye' 
             //The 'this' keyword here refers to the function ,hence we need to bind this 
             //at the button to make the 'this' keyword refer to the original class where the state
             //had been initially set 
             //<button onCLick={this.clickHandler.bind(this)}></button> //Now no error 
             //This method can however lead to re-rendering which might not be good for complex apps

        })
    }
    render()
    {
        return(
            <div>
                <p> {this.state.message} </p>
                <button onClick={this.clickHandler.bind(this)}> Click Message  </button> 

            </div>
        )
    }
}


class EventBindTwo extends Component
{
    constructor(props){
        super(props)
        this.state={
            message:'Hello' //Lets change message to Goodbye when the use clicks the button 
        }
    }

    clickHandler(){
        this.setState({
            message:'Goodbye' 
             //The 'this' keyword here refers to the function ,hence we need to bind this 
             //at the button to make the 'this' keyword refer to the original class where the state
             //had been initially set 
             //<button onCLick={this.clickHandler.bind(this)}></button> //Now no error 
             

        })
    }
    render()
    {
        return(
            <div>
                <p> {this.state.message} </p>
                {/* Second Method */}
                {/* Second approach involves using the arrow function  */}
                <button onClick={()=>this.clickHandler()}> Change the Message </button>
                
            </div>
        )
    }
}

class EventBindThree extends Component
{
    constructor(props){
        super(props)
        this.state={
            message:'Hello' //Lets change message to Goodbye when the use clicks the button 
        }

        //This approach involves binding the eventhandler 
        //inside the constructor itself and is common in most React appls
        //Here the binding occurs once in the constructor and is alright for performance 
        this.clickHandler=this.clickHandler.bind(this)
    }


    
    clickHandler(){
        this.setState({
            message:'Goodbye' 
             //The 'this' keyword here refers to the function ,hence we need to bind this 
             //at the button to make the 'this' keyword refer to the original class where the state
             //had been initially set 
             //<button onCLick={this.clickHandler.bind(this)}></button> //Now no error 
             //This method can however lead to re-rendering which might not be good for complex apps

        })
    }
    render()
    {
        return(
            <div>
                <p> {this.state.message} </p>
                <button onClick={this.clickHandler}> Click the message </button>
               

            </div>
        )
    }
}


class EventBindFour extends Component
{
    constructor(props){
        super(props)
        this.state={
            message:'Hello' 
            //Lets change message to Goodbye when the use clicks the button 
        }

    }
    
   //We now utilize arrow functions here, it can still be be used as this.clickHandler directly 
   clickHandler=()=>{
    this.setState({
        message:'Goodbye'
    })
   }

    render()
    {
        return(
            <div>
                <p> {this.state.message} </p>
                <button onClick={this.clickHandler}> Click the message </button>
               

            </div>
        )
    }
}



export default EventBindOne
