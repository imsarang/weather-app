import React, { useEffect, useState } from 'react'
import Weather from './Weather'

const Menu3 = ({reportLoc,reportCurr,reportForecast,coor,city}) => {
  const [hours,setHours] = useState(0)
  const [min,setMin] = useState(0)
  const [std,setStd] = useState("AM")
  // const [current,setCurrent] = useState()
  useEffect(()=>{
    // getCurrentTime()
    const timer = setInterval(()=>{
      getCurrentTime()

    },1000)
    return ()=>clearInterval(timer)
  },[city])

  const getCurrentTime = ()=>{
    // const current = new Date()
    const current = reportLoc.localtime
    let timeArr = current.split(' ')
    timeArr = timeArr[1].split(':')
    const hours = timeArr[0]
    // const hours = current.getHours()
    if(hours>12){
      setHours(hours-12)
      setStd("PM")
    }
    else {
      setHours(hours)
      setStd("AM")
    }
    setMin(timeArr[1])
  }
  
  return (<div style={{
    height:'100%'
  }}>
    <div className='flex justify-between items-center px-8 py-8 text-white'>
      <div className='w-1/2'>
        <div className='font-Inter font-bold text-4xl'>{reportLoc.name}</div>
        <div className='font-Inter text-[15px]'>{reportLoc.region}</div>  
      </div>
      <div className='font-Inter text-[15px]'>
        {hours}:{min} {std}
      </div>
    </div>
    <Weather reportLoc={reportLoc} reportCurr={reportCurr} reportForecast={reportForecast}/>
  </div>
  )
}

export default Menu3