import React from 'react'
import NavBar from '../NavBar/NavBar';


let iphone= "iphone";

let samsung= "samsung";

function ListItem() {

  return (
    <>
    <NavBar iphoneProps={iphone} samsungProps={samsung} /> 
    </>
    
  )
}

export default ListItem