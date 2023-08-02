import React from 'react'

const Input = ({colorValue,setColorValue}) => {
  return (
  <form action="" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="">Add Color Name</label>
    <input type="text"
    autoFocus 
    placeholder='Add Color Name'
    required
    value={colorValue}
    onChange={(e) => setColorValue(e.target.value)}/>
  </form>
  )
}

export default Input