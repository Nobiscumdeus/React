import React , {Component} from 'react'

function HigherOrderComponent(OriginalComponent,data){
   return class extends React.Component{
    //Make the intended imptovememts here 
    render(){
        return(
            <OriginalComponent />
        )
    }

   }
}

const HOC=(Component,data)=>{
    return class extends React.Component{
        render(){
            <div>
                Hello <Component/>
            </div>
        }
    }
}

const EnhancedLikes=HOC(LikesCount)

export default HigherOrderComponent ;
