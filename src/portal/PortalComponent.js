import React from 'react'
import ReactDOm from 'react-dom'

/**The main purpose of a portal is to provide a way to 
render content outside of the typical component hierarchy, 
which can be necessary for certain scenarios.
**/


const PortalComponent=({targetId,children})=>{
    const portalRoot=document.getElementById(targetId);
    return portalRoot ?ReactDOM.createPortal(children,portalRoot) :null;


}

export default PortalComponent 