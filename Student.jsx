import React from 'react'

export default function Student({roll,name,branch,sec,block,status}) {
  return (
    <div>
     <table border="1px" >
      
      <tr>
      <th style={{ padding: '10px' }} >Roll</th>
      <th style={{ padding: '10px' }}>Name</th>
      <th style={{ padding: '10px' }}>Branch</th>
      <th style={{ padding: '10px' }}>Section</th>
      <th style={{ padding: '10px' }}>Block</th>
       <th style={{ padding: '10px' }}>status</th>
       </tr>
    
        <tr>
        <td style={{ padding: '10px' }}>{roll}</td>
        <td style={{ padding: '10px' }}>{name}</td>
        <td style={{ padding: '10px' }}>{branch}</td>
        <td style={{ padding: '10px' }}>{sec}</td>
        <td style={{ padding: '10px' }}>{block}</td>
        <td>{status?"active":"inactive"}</td>
      </tr>

     </table>
    </div>
  )
}
