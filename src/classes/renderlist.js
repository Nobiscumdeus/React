import React from 'react'
function NameList()
{
    const names=['Bruce','Clark','Diana']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Django Developer'
        },
        {
            id:3,
            name:'Adams',
            age:45,
            skill:'Node Js'
        }
    ]
    const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    return <div> {nameList} </div>
}