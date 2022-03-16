import React from 'react'
import NavBar from '../NavBar/NavBar'


let iphone= 'iphone';

let samsung='samsung'


function ListItem() {


  return (

    <>
      <NavBar samsungProps={samsung} iphoneProps={iphone}/>
    </>
    
  )

}

export default ListItem