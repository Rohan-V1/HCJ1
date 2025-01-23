import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    let nav= useNavigate()

    let Click=()=>{
        nav('/arrow')
    }

    let Click2=()=>{
        nav('/array')
    }
    let Click3=()=>{
        nav('/table')
    }

  return (
    <div>
        <h1>Home Component</h1>
        <Link to='/array'>Array</Link>
        <br />
        <Link to='/arrow'>Arrow</Link>
        <br />
        <Link to='/destructuring'>Destructuring</Link>
        <br />
        <Link to='/props'>Props</Link>
        <br />
        <Link to='/spread'>Spread</Link>
        <br />
        <Link to='/table'>Table</Link>
        <br />
        <Link to='/ternary'>Ternary</Link>
        <br />
        <Link to='/mui'>MUI</Link>
        <br />
        <Link to='/state'>State</Link>
        <br />
        <Link to='/color'>Color</Link>
        <br />
        <Link to='/effect'>Effect</Link>
        <br />
        <Link to='/api'>API</Link>
        <br />
        <div className="blank"></div>
        <br />
        


        <button onClick={Click}>Click</button> <br />
        <Button onClick={Click2}>Click2</Button><br />
        <Button variant='contained' onClick={Click3}>Click3</Button><br />    

                                                                                                                                                                                                                                                                                                                       
       

    </div>
  )
}
