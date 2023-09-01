import React , { useState,useEffect} from 'react'


function CheckNumber(){
    const [value,setValue]=useState(0)
    const [mesage,setMessage]=useState('')


    useEffect(()=>{
        setMessage(value%2===0?"Even Number":"Odd Number")

    },[value])

    increment=()=>{
        setValue(value+1);

    }
    return(
        <>
        <h4>Is Number Odd or Even ?</h4> 
        <p> Message : </p>
        <button onClick={increment}> Increment  </button>
        </>
    )
    
}

export default CheckNumber 