import React from 'react'
import './style.css';
import Button from '@mui/material/Button';

export default function Arrow() {

  let Arr=()=>alert("Arrow");
  let txt=()=>"Hi";

  function Simple(a,b){
    alert("simple "+a+"  "+b+" "+txt());
  }
  return (
    <div>
        <h1 id='arrowhead'>Name</h1>
        <Button variant="text" sx={{background: "yellow"}}>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button onClick={()=>Simple("crumble","rumble")} variant="outlined">Simple</Button>
        <Button onClick={Arr} variant="outlined">Arrow</Button>
    </div>
  )
}
