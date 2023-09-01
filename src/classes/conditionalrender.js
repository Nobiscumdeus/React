import React from 'react'

/**Types of Conditional Rendering in React are :
 * 1. if/else
 * 2.Element variables
 * 3. Ternary conditional operator
 * 4. short circuit operator , It is used when we want to render somethig or nothing
 * Its a special condition of the ternary 
 */

//Step 1: Using the If/else Condition 
class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return(
                <div> Welcome Dr Chasfat </div>
            )
        }else{
            return(
                <div> Welcome here our Guest </div>
            )
        }
       
    }
}
//NB: if/else statements do not actually work inside the JSX, since JSX is just a 
//syntactic sugar for function calls


//APproach 2: Using Element Variables 
class DaddyGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        let message
        if(this.state.isLoggedIn){
            message=<div> Welcome Daddy </div>
        }else{
            message=<div> Guest</div>
        }
        return(
            <div> {message}</div>
        )
    }
}

//Third Approach: Ternary Operator 
class MummyGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    render(){
      this.state.isLoggedIn ?
      (<div> Welcome Guest </div>) :
      (<div> Welcome Mommy </div>)
      
    }
}

class SisterGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        {/* Render something or nothing */}
     return  this.state.isLoggedIn && <div> You are Logged in ma</div>
      
    }
}


export default UserGreeting