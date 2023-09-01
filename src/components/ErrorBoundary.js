import React, {Component } from 'react'

class FirstErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }

        ComponentDidCatch(error,info)
        {
            this.setState({hasError:true});
            consoe.log(error)
        }
    }
    render(){
        if(this.state.hasError){
            return (
                <p> Ooops, something went wrong </p>
            )
            return this.props.children 
        }
    }

}


import React, { useState } from 'react';

function SecondErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, info) => {
    setHasError(true);
    // You can also log the error or send it to an error tracking service
    console.error(error, info);
  };

  if (hasError) {
    return <p>Oops, something went wrong.</p>;
  }

  return children;
}


export default FirstErrorBoundary 

//You can now wrap apps in the Error Boundary
//In developemtn, you still see errors  due to the React Team insight to allow errors be seen in development
//, but in production its full fledged 
/**
 * eg in the App.js
 <ErrorBounday>
 <Home />
 </ErrorBoundary>
 */