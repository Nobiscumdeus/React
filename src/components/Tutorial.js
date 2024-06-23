import React from 'react'
import {useState}  from 'react' 

function Car(props){
    return <li> I am a {props.brand} </li>
}

function Garage(){
    const cars=[
        {id:1,brand:'Ford'},
        {id:2,brand:'BMW'},
        {id:3,brand:'Audi'},
        {id:4,brand:'Toyota'}
    ]

    return(
        <>
        <h3 className="font-semibold text-3xl text-red-500"> What cars are in my Garage ? </h3>
        <ul>
            {
                cars.map((car)=><Car key={car.id} brand={car.brand} />)
            }
        </ul>
        <AdvancedForm />
        <MyForm />

        </>
    )
}

function MyForm(){


    return(
        <form>
            <label>Enter your Name : </label> 
            <input type="text" />
        </form>
    )
}
function AdvancedForm(){
    const [name,setName]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`The name you entered was ${name }`)

    }
    return(
        <form onSubmit={ handleSubmit }>
            <label> Enter your name :
            <input type="text" 
              value={name}
              onChange={(e)=>setName(e.target.value)}
                />
            
            </label>
            <input type="submit" />
        </form>
    )
}
export default Garage; 