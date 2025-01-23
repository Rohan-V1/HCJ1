import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function State() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('Lamine')
    const [color,setColor]=useState('beige')
    const [phone,setPhone]=useState()
    const [user,setUser]=useState({name: "",email: ""})

    const Count=()=>{
        setCount(count+1)
    }
    const Count2=()=>{
        setCount(count-1)
    }

    const Handlechange=(e)=>{
      setUser({...user,[e.target.name]: e.target.value})
    }
    

  return (
    <div>
        <h1>State Component</h1>
        <h1>Counter: {count}</h1>
        <Button onClick={Count} variant='contained'>+</Button>
        <Button onClick={Count2} variant='contained'>-</Button>
        <Button onMouseEnter={()=>setCount(count-1)} variant='outlined'>-</Button>
        <Button onMouseEnter={()=>setCount(count+1)} variant='outlined'>+</Button>
        <br />
        <h1>{name}</h1>
        <Button onClick={()=>setName("Yamal")} variant='outlined'>change</Button>
        
        <h1 style={{color: color}}>Colour: {color}</h1>
        <Button onClick={()=>setColor("Cyan")} variant='outlined'>change color</Button>
        <div className="blank"></div>
        <h1>Phone number:  {phone}</h1> 
        <TextField onChange={(event)=>setPhone(event.target.value)} type='text'/>
        <div className="blank"></div>
        <h4>Name : {user.name}</h4>
        <h4>Email : {user.email}</h4>
        <TextField onChange={Handlechange} name='name' placeholder="Enter your name" type='text'/>
        <TextField onChange={Handlechange} name="email" placeholder="Enter your name" type='text'/>


    </div>
  )
}
