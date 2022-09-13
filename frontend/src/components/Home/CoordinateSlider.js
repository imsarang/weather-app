import React, { useEffect, useState } from 'react'
import "./coorSlider.css"
const CoordinateSlider = ({ coordinate,setCoordinate }) => {

 const [width,setWidth] = useState(50)
 
 const handleChange = (e)=>{
    setCoordinate(((e.target.value * 360/100)-180).toPrecision(5))
    setWidth(e.target.value)
 }
 const handleValueChange = (e)=>{
  setWidth(((e.target.value+180)/360) * 100)
  setCoordinate(e.target.value)
  console.log(e.target.value);
  console.log(width);
 }
  return (
    <div className='price-slider'>
      <input type='range' className='w-full' value={width} onChange={(e)=>handleChange(e)}/>
      <input type='number'className='w-1/3 p-2' style={{
        borderRadius:'10px',
        backgroundColor:"white",
        color:'black'
      }} value={coordinate} onChange={(e)=>handleValueChange(e)}/>
    </div>
  )
}

export default CoordinateSlider