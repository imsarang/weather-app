import React from 'react'
import { FaCloudRain, FaFileArchive, FaWind } from 'react-icons/fa'
import {WiBarometer} from "react-icons/wi"
import {BsCloudRain, BsSun} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
// import {GiSunRadiations} from "react-icons/gi"

const DashboardContent = ({reportCurr,reportForecast}) => {
    const navigate = useNavigate()
    const handleMore = ()=>{
        navigate('/more')
    }
    return (
        <>
            <div className='flex justify-between'>
                <div className='font-Inter font-bold text-2xl'>Today Overview</div>
                <div className='font-Inter text-[13px] flex items-center' style={{
                    color: "#355ef2"
                }} onClick={handleMore}>
                    Show More <FaFileArchive />
                </div>
            </div>
            <div className='flex flex-wrap py-4 '>
                <div className='w-1/2 pr-4 pb-4'>
                    <div className='flex items-center px-8' style={{
                        backgroundColor: "white",
                        borderRadius: "10px"
                    }}>
                        <div className=' py-8'><FaWind className='text-4xl' style={{
                            color: "#355ef2"
                        }} /></div>
                        <div className='px-8'>
                            <div className='font-Inter pb-2' style={{
                                color: "#505052"
                            }}>Wind Speed</div>
                            <div className='text-4xl font-Inter'>{reportCurr.wind_kph}km/h</div>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='w-1/2 pr-4 pb-4'>
                    <div className='flex items-center px-8' style={{
                        backgroundColor: "white",
                        borderRadius: "10px"
                    }}>
                        <div className=' py-8'><BsCloudRain className='text-4xl' style={{
                            color: "#355ef2"
                        }} /></div>
                        <div className='px-8'>
                            <div className='font-Inter pb-2' style={{
                                color: "#505052"
                            }}>Rain Chance</div>
                            <div className='text-4xl font-Inter'>{reportForecast.forecastday[0].day.daily_chance_of_rain}%</div>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='w-1/2 pr-4'>
                    <div className='flex items-center px-8' style={{
                        backgroundColor: "white",
                        borderRadius: "10px"
                    }}>
                        <div className=' py-8'><WiBarometer className='text-4xl' style={{
                            color: "#355ef2"
                        }} /></div>
                        <div className='px-8'>
                            <div className='font-Inter pb-2' style={{
                                color: "#505052"
                            }}>Pressure</div>
                            <div className='text-4xl font-Inter'>{reportCurr.pressure_mb}mb</div>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className='w-1/2 pr-4'>
                    <div className='flex items-center px-8' style={{
                        backgroundColor: "white",
                        borderRadius: "10px"
                    }}>
                        <div className=' py-8'><BsSun className='text-4xl' style={{
                            color: "#355ef2"
                        }} /></div>
                        <div className='px-8'>
                            <div className='font-Inter pb-2' style={{
                                color: "#505052"
                            }}>UV Index</div>
                            <div className='text-4xl font-Inter'>{reportCurr.uv}</div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DashboardContent