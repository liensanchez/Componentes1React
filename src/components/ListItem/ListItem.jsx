import React from 'react'
import NavBar from '../NavBar/NavBar'


let celularIphone= 'iphone';

let celularSamsung= 'samsung';


function ListItem() {


  return (

    <>

    <NavBar iphoneProps={celularIphone} samsungProps={celularSamsung} /> 
    
    </>
    
  )

}

export default ListItem