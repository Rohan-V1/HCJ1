import React from 'react'

export default function Props(props) {

    const Fun=({name})=><h1>Hello {name}</h1>

  return (
    <div>
        
        {props.name}
        <Fun name="Nelson"/>
        <button onClick={props.click}>Click</button>
    </div>
  )
}
