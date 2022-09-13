import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { BsSun, BsSunFill, BsSunrise, BsSunriseFill, BsSunset } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { WiCelsius } from 'react-icons/wi'
import { handleIcons } from '../../handleIcons'
import { bounce } from "react-animations"
import ProgressBar from './ProgressBar';


const move = keyframes`0%{
    width:0%;
}
100%{
    width:100%
}`;

const Weather = ({ reportCurr, reportLoc, reportForecast }) => {
    const [rainArr, setRainArr] = useState([{
        time: 0,
        percent: 0
    }, {
        time: 0,
        percent: 0
    }, {
        time: 0,
        percent: 0
    }, {
        time: 0,
        percent: 0
    }])

    useEffect(() => {
        if (reportForecast) {
            handleRainArr()
        }
    }, [reportForecast]) 

    const handleRainArr = () => {
        const date = new Date()
        const hour = date.getHours()
        
        let rain = []
        
        let c = 0;
        reportForecast.forecastday[0].hour.map((item) => {
            let arr = item.time.split(' ')
            arr = arr[1].split(':')
            
            if (arr[0] > hour && c != 4) {
                arr = arr[0].split('')
                if (arr[0] == 0) {
                    arr[0] = arr[1]
                    arr.pop()
                }
                
                if (!arr[1])
                    rain = rain.concat({
                        time: arr[0],
                        percent: item.chance_of_rain
                    })
                else
                    rain = rain.concat({
                        time: arr[0] + arr[1],
                        percent: item.chance_of_rain
                    })
                c += 1;
            }
        })
        setRainArr(rain)
    }

    return (
        <div style={{height:'100%'}}>
            <div className='px-8 py-2'>
                <div>
                    <img src={reportCurr.condition.icon}/>
                </div>
                <div className='flex justify-between' style={{
                    borderBottom: "2px solid #bab7b6",
                }}>
                    <div className='flex text-5xl text-white'>
                        {reportCurr.temp_c} <WiCelsius className='text-[80px] text-white relative bottom-1 right-4' />
                    </div>
                    <div className='font-Inter text-white text-[15px]'>
                        {reportCurr.condition.text}
                    </div>
                </div>
            </div>

            <div className='px-8 py-7'>
                <div className='text-white text-xl font-Inter pb-2'>Chance of rain</div>
                <div>
                    {
                        rainArr.map((item) => {
                            return <ProgressBar item={item} />
                        })
                    }

                </div>
            </div>

            <div className='px-8 py-4'>
                <div className='font-Inter text-white text-xl pb-8'>Sunrise & Sunset</div>
                <div className='flex py-2 items-center mb-2' style={{
                    backgroundColor: "rgba(10, 34, 99,0.5)",
                    borderRadius: "10px",
                    border: "2px solid white"
                }}>
                    <div className='text-white text-4xl py-4 px-4'><BsSunrise /></div>
                    <div className='w-4/6 text-white '>
                        <div className='font-Inter text-lg'>Sunrise</div>
                        <div className='text-2xl'>{reportForecast.forecastday[0].astro.sunrise}</div>
                    </div>
                    {/* <div className='w-1/6 text-white font-Inter text-[12px]'>{4} hours ago</div> */}
                </div>

                <div className='flex py-2 items-center' style={{
                    backgroundColor: "rgba(10, 34, 99,0.5)",
                    borderRadius: "10px",
                    border: "2px solid white"
                }}>
                    <div className='text-white text-4xl py-4 px-4'><BsSunset /></div>
                    <div className='w-4/6 text-white '>
                        <div className='font-Inter text-lg'>Sunset</div>
                        <div className='text-2xl'>{reportForecast.forecastday[0].astro.sunset}</div>
                    </div>
                    {/* <div className='w-1/6 text-white font-Inter text-[12px]'>in {4} hours</div> */}
                </div>
            </div>
        </div>
    )
}

export default Weather