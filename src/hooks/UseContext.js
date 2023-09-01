import React, { createContext,useContext} from 'react'


//Imagine in a privileged to be in a war room where criticial info about the war is being displayed,
//and military officers with different roles need access to this information 


//In that case, we create the "War Room Context"

const WarRoomContext=createContext();

//War Room Provider Component to wrap your app 
//This context is responsible for setting up the context and providing the data 
//The value props refers to all variables or info we want to be globally available
//children are simply objects that will be enclosed in the WarRoomProvider later on as seen below ...
/** 
 * <WarRoomProvider>
<MilitaryOfficer />
</WarRoomProvider>
 * 
..It is hence a shorthand for accessing the contents wo be placed within the WarRoomProvider later on*/ 


function WarRoomProvider({children})
{
    const battleStatus='In Progress'
    const missionObjective='Capture Enemy base'
    const commandingOfficer='General Smith '

    return(
        <WarRoomContext.Provider value={{battleStatus,missionObjective,commandingOfficer}}>
            {children}

        </WarRoomContext.Provider>
    )
}


//A component for a Military officer who needs access to the War Room Information
//So instead of useState, useContext is utilized as replacement
//Moreso this is the MilitaryOfficer Component own way of using the information it collects to ....
//...simply display them as seen below 

function MilitaryOfficer()
{
    const {battleStatus,missionObjective,commandingOfficer}=useContext(WarRoomContext)

    return(
        <div>
            <h3>Battle Status: {battleStatus}</h3> 
            <p> Mission Objective : {missionObjective} </p>
            <p> Commanding Officer: {commandingOfficer} </p>
        </div>
    )
}

function AccesstoInfo()
{
    return(
        <div className="App">
            <WarRoomProvider>
                    <MilitaryOfficer />
                    {/* Other Components that need access to the war room information */}
            </WarRoomProvider>
        </div>
    )
}

export default AccesstoInfo
