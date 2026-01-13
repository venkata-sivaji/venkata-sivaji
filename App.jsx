import React from 'react'
import Student from './Student.jsx'

export default function first() {
 
  
  return (
    <div>
      <h1>student details</h1>
    <Student 
    roll="101" 
    name="sivaji"
    branch="mccs"
     sec="A"
      block="2b"
      status={1}
      />
      <Student 
    roll="102" 
    name="tulasi"
    branch="mccs"
     sec="b"
      block="2b"
      status={0}
      /><Student 
    roll="102" 
    name="raju"
    branch="mpcs"
     sec="d"
      block="1b"
      status={1}
      />

    </div>
  )
}
