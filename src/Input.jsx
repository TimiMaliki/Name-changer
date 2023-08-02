import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,setColorValue, setHexValue }) => {
  return (
  <form action="" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="">Add Color Name</label>
    <input type="text"
    autoFocus 
    placeholder='Add Color Name'
    required
    value={colorValue}
    onChange={(e) => {setColorValue(e.target.value)
    setHexValue(colorNames(e.target.value))
    }}
      
    />
  </form>
  )
}

export default Input