import React from 'react'
import ReactDOM from 'react-dom'

//A typical explanation of Higher Order Component (HOC) in React with Code Illustration
//The goal is to greet either a Doctor or a Nurse with specific welcome message depending on the role

//Here we have our enhanced component called: withWelcomeMessage
//What does it do ?
//1.It takes another component(WrappedComponent which could be DoctorPage or NursePage)
//2.It also takes a role, which it uses to enhance either hthe Doctor or Nurse Page 
const withWelcomeMessage=({WrappedComponent,role})=>{
    return(props)=>{
        const name=props.name || 'Guest'
        const welcomeMessage=`Welcome, ${role} ${name}`
        return <WrappedComponent welcomeMessage={welcomeMessage} {...props}/>
    }

}

//You observe that the Doctors page is specific to Doctor
//But since the "welcomeMessage" varies depending on the role,...
//...we use higher order component called withWelcomeMessage to enhance...
//...either DoctorPage or NursePage components depending on the role to display a welcomeMessage
const DoctorPage=({welcomeMessage})=>{
   <div>
    <h5> Doctors Page </h5>
    <p> {welcomeMessage} </p>
   </div>
    

}

const NursePage=({welcomeMessage})=>{
    <div>
        <h5> Teachers Page </h5>
        <p> {welcomeMessage}</p>
    </div>
}


const UserAccess=({role,name})=>{
    //We first initialize the page component to be displayed e.g.,DoctorPage or NursePage
    let PageComponent
    if(role==='doctor' || role==='Doctor')
    {
        PageComponent=withWelcomeMessage(DoctorPage,'Doctor')
    }
    else if(role==='nurse' || role ==='Nurse')
    {
        PageComponent=withWelcomeMessage(NursePage,'Nurse')
    }
    else
    {
        //Here a function is simply executed
        PageComponent=()=><p> Ooops!! You are neither a Doctor nor a Nurse </p>
        
    }
    //So the UserAccess allows us to return two main things 
    //1. The enhanced component with the appropriate components
    // i.e either NursePage or DoctorPage components passed in it. 
    return <PageComponent name={name} />

}

 ReactDOM.render(
    <UserAccess role="doctor" name="Alice" />,
    document.getElementById('root')
  );




bio = "🌐 Exploring Health, Tech, Agric & Beyond 🌱🔬💡Medicine  | Technology | Agriculture | Innovator"
  print(bio)


  
  
  