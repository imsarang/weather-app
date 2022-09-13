import React, { useEffect, useState } from 'react'

const ProgressBar = ({ item }) => {
    const [amorpm,setAmOrPm] = useState('AM')
    const [time,setTime] = useState(item.time)
    
    useEffect(()=>{
        handleAMorPM()
    },[])

    const handleAMorPM = ()=>{

        if(item.time>=12){
            setAmOrPm('PM')
        }
        else setAmOrPm('AM')
        // console.log(item.percent);
        
    }
    return (
        <div className='flex py-2'>
            <div className='w-1/6 text-white'>{item.time>12?item.time-12 : item.time} {item.time>12?"PM":"AM"}</div>
            <div className='w-4/6' style={{
                backgroundColor: "rgb(52, 51, 105,0.7)",
                borderRadius: "20px"
            }}>
                <div className='progress' style={{
                    width: `${item.percent}%`,
                    height: "100%",
                    borderRadius: "20px",
                    backgroundColor: "rgb(136, 164, 247)",
                    position: 'relative',
                    // animation: `move 1s linear infinite`,
                    // transitionDelay:'0.5s',
                    transitionDuration: "1s"
                }}>
                </div>
            </div>
            <div className='w-1/6 pl-4 text-white font-Inter'>{item.percent}%</div>
        </div>
    )
}

export default ProgressBar