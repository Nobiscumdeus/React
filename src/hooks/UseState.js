import React from 'react'

function FavoriteColor()
{
    const [color,setColor]=useState('')

    return(
        <>
        <h3> The Color now is {color} </h3>
        <button onClick={()=>setColor("blue")}> Update Color to Blue  </button>
        </>
        
    )
}