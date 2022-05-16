import React from 'react'

import {Circles} from 'react-loader-spinner'


const Spinner = ({message}) => {
  return (
    <div style={{height:'100vh', width:'100vw',display:"flex", justifyContent:'center', alignItems:'center'}}>
    <div style={{height: '100vh', background:'transparent', display:"flex", justifyContent:'center', alignItems:'center', opacity:0.5}}>
       <Circles color="white" height={80} width={80}  ariaLabel={message}/>
    </div>
    </div>
  )
}

export default Spinner