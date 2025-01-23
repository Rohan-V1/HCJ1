//import { Language } from '@mui/icons-material'
import React from 'react'

export default function () {
    const arr=['b','a','t','a','r','a','n','g']
    const num=[2+4,3+6,8-4+2-2,20]
    let a1=arr[0]
    let a2=arr[1]
    let a3=arr[2]

    let [a4,a5,a6]=arr
    let [n1,n2,n3,n4]=num

        
    let user={name:"pogba",age:"30",phone:"34567",designation:"CM",language:{l1:"French",l2:"English",l3:"Italian"}}

    let{name,age,phone,designation,language:{l1,l2}}=user

  return (
    <div>
        {a1}
        {a2}
        {a3}
        {a4}
        {a5}
        {a6}

        {n1}
        {n2}
        {n3}
        {n4}
        {name}
        {age}
        {phone}
        {designation}
        {l1}
        {l2}

    </div>
  )
}
