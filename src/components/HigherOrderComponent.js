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


const WithAccessControl=(WrappedComponent,requiredRole)=>{
    return class WithAcessControl extends Component{
        state={
            userRole:'student'
        }
        render(){
           if(thus.state.userRole === 'student'){
            return <WrappedComponent {...this.props}/>
           }else{
            return <p> Ooops , you do not currently have access to this service please </p>
           }
        }
    }
}

const StudentInfo=({student})=>{
    <div>
        <h3> Student Information </h3> 
        {/* Student Details */}
    </div>

}

const StudentInfoWithAcces=WithAccessControl(StudentInfo,'student')



//Another format of HOC
const UpdatedComponent=OriginalComponent=>{
    class NewComponent extends Component {
        render(){
            return <OriginalComponent />
        }
    }
    return NewComponent 
}
//export default UpdatedComponent
export default HigherOrderComponent ;
