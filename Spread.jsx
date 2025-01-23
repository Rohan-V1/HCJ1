 import React from 'react'
 
 export default function Spread() {
  let a1=[1,2,3,4,5];
  let a2=[6,7,4,8,9];
  let a3=[...a1,...a2];//Spread Operator...
  let a4=[a1+a2]
  let cars={
    model:"Murciealago",
    brand: "Lamborghini",
    color: "Black",
    engine:"V10"
  }

  let upcars={
    topspeed: 220,
    color: "Yellow"
  }

  let updated={...cars,...upcars}
  let array=[1,2,3,4,5,6,7,8]
  let [...z]=array
  console.log(updated)

   return (
     <div>
        <h1>Spread Operator</h1>
        {a1}<br/>
        {a2}<br/>
        {a3}<br/>
        {a4}<br/>
        {z}
        
        
     </div>
   )
 }
 