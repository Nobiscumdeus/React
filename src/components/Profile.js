import React from 'react'



const profile={
    name:"Heddy Lamerr",
    image:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:90

}
function Profile()
{
    return(
        <>
        <h3> (1) Just a simple Profile </h3> 
        <h4> { profile.name } </h4>
        <img 
        className="avatar"
        src={profile.image}
        alt={'Picture of ' + profile.name }
        style={{
            width:profile.imageSize,
            height:profile.imageSize
        }}

        />
        </>

    )
}

export default Profile 