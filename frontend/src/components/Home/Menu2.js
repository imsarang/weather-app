import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getMonth } from '../../general'
import DashboardContent from './DashboardContent'
import Graph from './Graph'

const key = 'c7d3616d356048d797f155719222402'

const Menu2 = ({city,setCity,setReportLoc,setReportForecast,setReportCurr,setCoor,reportLoc,reportCurr,reportForecast}) => {

  const handleChange = (e)=>{
    setCity(e.target.value)
  }
  const [takeMonth,setMonth] = useState('xyz')
  useEffect(()=>{
    handleMonth()
    // console.log(reportLoc);
  },[])

  const handleMonth = ()=>{
    setMonth(getMonth(reportLoc.localtime.split(' ')[0].split('-')[1]))

  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setCity(() => Object.fromEntries(new FormData(e.target)).city)
    //setCoor({
    //  lat:ans.location.lat,
     // long:ans.location.lon
    //})

  }
  return (
    <div className='py-8 px-8'>
      <div className='flex justify-between'>
        <div>
          <div className='text-4xl font-bold font-Inter'>{takeMonth} 2022</div>
          <div className='text-lg font-Inter pt-2'>{takeMonth} {reportLoc.localtime.split(' ')[0].split('-')[2]},2022</div>
        </div>
        <form onSubmit={handleSubmit} className='w-1/2'>
          <div className='flex w-full h-12 bg-gray-100 items-center' style={{
            borderRadius: "10px"
          }}>

            <FaSearch className='ml-2' onClick={handleSubmit}/>
            <input type='text' placeholder='Search Location' className='w-full p-4' style={{
              background: "none",
              outline: "none"
            }} 
            name="city"
            />
          </div>
        </form>
      </div>
      <div className='pt-2'>
        <DashboardContent reportCurr = {reportCurr} reportForecast={reportForecast}/>
      </div>
      <Graph reportForecast = {reportForecast}/>
    </div>
  )
}

export default Menu2