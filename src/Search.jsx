import React from 'react'

export default function Search(props) {
  return (
    <>
      <div className="row">
            <input onChange={(e) => props.nameChange (e.target.value)} type="text" className='form-control my-3' placeholder='Search movie name here.....'/>
            
      </div>
    
    </>
  )
}


