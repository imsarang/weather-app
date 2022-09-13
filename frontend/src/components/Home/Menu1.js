import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaAlignLeft, FaArrowLeft, FaCalendar, FaLandmark, FaLocationArrow, FaSearch} from "react-icons/fa"
import CoordinateSlider from './CoordinateSlider'
import {ImLocation} from "react-icons/im"

const Menu1 = ({ latitude, longitude, setLatitude, setLongitude,setClick,click }) => {
    const navigate = useNavigate()
    const handleSearch = ()=>{
        
    }
    const handleLocation = () => {
        navigate('/')
    }
    const handleSaved = () => {
        navigate('/saved')
    }
    const handleCalender = () => {
        navigate('/calender')
    }
    const handleState = () => {
        navigate('/state')
    }
    if(!click) return <></>
    return (
        <div style={{height:"100%"}}>
            <div className=' flex justify-between pt-8 pb-24 px-8 font-Inter font-bold text-2xl'>
                <div>BRAND</div>
                <FaArrowLeft onClick={()=>setClick(false)}/>
            </div>
            <div className='flex justify-start items-center py-2 px-8 font-Inter font-bold text-lg cursor-pointer'
                onClick={handleLocation}>
                <FaSearch className='mr-2'/>Search Location
            </div>
            <div className='flex justify-start items-center py-2 px-8 font-Inter font-bold text-lg cursor-pointer'
                onClick={handleState}>
                <FaSearch className='mr-2'/>States(India)
            </div>
            <div className='flex justify-start items-center py-2 px-8 font-Inter font-bold text-lg cursor-pointer'
                onClick={handleSaved}>
                <ImLocation className='mr-2'/> Saved Location
            </div>
            <div className='flex justify-start items-center py-2 px-8 font-Inter font-bold text-lg cursor-pointer'
                onClick={handleCalender}>
                <FaCalendar className='mr-2'/> Calender
            </div>
            <div className='py-2 px-8'>
                <div className='font-BebasNeue flex justify-between'>Latitude
                <div>
                    <FaSearch className='cursor-pointer' onClick={handleSearch}/>
                </div></div>
                <CoordinateSlider setCoordinate={setLatitude} coordinate={latitude} />
            </div>
            <div className='py-2 px-8'>
                <div className='font-BebasNeue'>Longitude</div>
            <CoordinateSlider setCoordinate={setLongitude} coordinate={longitude} />
            </div>


        </div>
    )
}

export default Menu1