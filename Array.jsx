 import React from 'react'
 
 export default function Array() {
    const arr=['b','a','t','a','r','a','n','g']
    let m= arr.map((i,j)=><h1>{++j}: {i}</h1>)

    const Emp=[
        {name:"pogba",age:"30",phone:"34567",designation:"CM"},
        {name:"Pedri",age:"20",phone:"98765",designation:"CM"},
        {name:"Lucas",age:"30",phone:"12345",designation:"RWB"},
        {name:"Camavinga",age:"25",phone:"09876",designation:"DM"}
    ]

   return (
     <div>
        <h1>Fast array</h1>
        <h1>{arr}</h1>
        <h2>{arr[0]}</h2>
        <h2>{arr[5]}</h2>
        {arr.map((i)=><h1>{i}</h1>)}
        {arr.map((i,j)=><h1>{++j}: {i}</h1>)}
        {m}

    <table>
        <tr>
            <th>Sl.No</th>
            <th>Fruit</th>
        </tr>
        {arr.map((i,j)=>{
            return(
                <tr>
                    <td>{j}</td>
                    <td>{i}</td>
                </tr>
            )
        })}
    </table>

    <table border={1}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Designation</th>
        </tr>

        {Emp.map((i,j)=>{
            return(
                <tr>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.phone}</td>
                    <td>{i.designation}</td>
                </tr>
            )
        })}

    </table>

    
    

     </div>
   )
 }
 