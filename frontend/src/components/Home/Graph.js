import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Area, AreaChart, CartesianGrid, Tooltip } from 'recharts'
import './graph.css'
const Graph = ({ reportForecast }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    handleData()
  }, [reportForecast])

  const handleData = () => {
    let data = []
    reportForecast.forecastday[0].hour.map((item) => {
      let arr = item.time.split(' ')[1].split(':')
      data = [...data, {
        time: arr[0],
        temperature: item.temp_c
      }]
    })
    setData(data)
  }
  return (
    <div className='font-Inter font-bold text-lg '>
      Temperature Vs Time
      <div className='py-4'>
        <ResponsiveContainer width='100%' aspect={3}>
          <AreaChart data={data} width={1000} height={300} margin={{
            top: 5,left:0,right:0
          }} >
            <defs>
              <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor='#0e3159' stopOpacity={1} />
                <stop offset="75%" stopColor='#346399' stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <XAxis dataKey={'time'} interval={'preserveStartEnd'} 
            axisLine={false}
            tickLine={false}
            tick={{fontSize:7}}
            tickFormatter={(number)=>{
              let x = number
              if(x>12) return `${x-12} PM`
              else return `${x} AM`
            }}
            />
            
            <YAxis 
            axisLine={false} 
            tickLine={false} 
            tickCount={6}
            tickFormatter={(number)=>`${number.toFixed()}°C`}
            tick={{fontSize:7}}/>
            <Area dataKey={'temperature'} stroke="#2451B7" fill='url(#color)'/>
            <Tooltip content={<CustomToolTip/>}/>
            <CartesianGrid opacity={0.1} vertical={false}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function CustomToolTip({active,payload,label}){
  if(active){
    return <div className='tooltip'>
      <div>{label} : 00</div>
      {/* <div>{JSON.stringify(payload)}</div> */}
      <div>{payload[0].value.toFixed(1)}°C</div>
    </div>
  }
  return null
}

export default Graph