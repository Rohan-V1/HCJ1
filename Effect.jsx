import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function Effect() {
        const [count,setCount]=useState(parseInt(localStorage.getItem('count')));
        const [square,setSquare]=useState(0);
        //localStorage.setItem("name",'rajdks')
        // let a = localStorage.getItem('name')
        // localStorage.removeItem('name')
        // localStorage.clear()
    
    
        const Count=()=>{
            setCount(count+1)
            localStorage.setItem("count",count+1)
            
            
        }

        const Count2=()=>{
            setCount(count-1)
            localStorage.setItem("count",count-1)

        }

        // const Clear=()=>{
        //     localStorage.removeItem("count")
        // }

        useEffect(() =>{
            setSquare(count * count)
            localStorage.setItem("square",count*count)
        },[count])

  return (
    <div>
        <h1>useEffect</h1>
        <h1>Counter: {count}</h1>
        <h1>Square: {square}</h1>
        <Button onClick={Count} variant='contained'>+</Button>
        <Button onClick={Count2} variant='contained'>-</Button>
        {/* <Button onClick={Clear} variant='contained'>Clear</Button> */}

        {/* {a} */}

       
        

        
    </div>
  )
}
