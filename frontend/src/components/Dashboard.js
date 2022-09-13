import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Menu1 from './Home/Menu1'
import Menu2 from './Home/Menu2'
import Menu3 from './Home/Menu3'
import "./Home/home.css"
import Loading from '../Loading'
import axios from 'axios'

const key = 'c7d3616d356048d797f155719222402'

const Dashboard = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [click, setClick] = useState(false)
  const [city, setCity] = useState(null)
  const [load, setLoad] = useState(false)
  const [coor, setCoor] = useState({
    lat: null,
    long: null
  })

  const [reportLoc, setReportLoc] = useState()
  const [reportCurr, setReportCurr] = useState()
  const [reportForecast, setReportForecast] = useState()

  const handleBars = () => {
    setClick(true)
    // console.log(report);
  }

  useEffect(() => {
    // setLoad(true) 
    handleCoords()
    // city==null ?handleCurrentReport():handleSubmit()
    // setLoad(false)
  }, [])

  useEffect(() => {
    if (city) {
      handleCityChange()
    }
  }, [city])

  useEffect(() => {
    if (coor && coor.lat && coor.long) {
      handleCurrentReport()
    }
  }, [coor])

  const handleCoords = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoor(() => ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }))
    })
  }
  const handleCurrentReport = () => {

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${coor.lat},${coor.long}&aqi=no`)
      .then((res) => res.json())
      .then((ans) => {
        if (!ans.error) {
          setReportLoc(ans.location)
          setReportCurr(ans.current)
          setReportForecast(ans.forecast)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleCityChange = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&aqi=no`)
      .then((res) => res.json())
      .then((ans) => {
        //console.log("ans", ans)
        if (!ans.error) {
          setReportLoc(ans.location)
          setReportCurr(ans.current)
          setReportForecast(ans.forecast)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    // const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&aqi=no`)
    // const ans = await response.json()
    // setReportLoc(ans.location)
    // setReportCurr(ans.current)
    // setReportForecast(ans.forecast)
    // setCoor({
    //   lat:ans.location.lat,
    //   long:ans.location.lon
    // })
    // setCity(ans.location.name)
    console.log(city);
  }

  if (load) return <Loading />
  return (
    <div className='flex' style={{ height: '100%' }}>
      <div className='flex bg-sky-100'>
        <div className='px-6 py-10'>
          <FaBars onClick={handleBars} className='text-2xl' />

        </div>

        <div className={`md:w-1/5 ${click ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-1000 text-white`} style={{
          backgroundColor: "rgba(0,0,0,0.95)",
          height: "100%",
          position: 'absolute',
        }}>

          <Menu1 setLatitude={setLatitude} setLongitude={setLongitude}
            latitude={latitude} longitude={longitude}
            setClick={setClick} click={click} />
        </div>
        <div className='' style={{
          height: "100%"
        }}>
          {
            reportLoc && reportForecast ? <Menu2 city={city} setCity={setCity}
              reportLoc={reportLoc}
              reportCurr={reportCurr}
              reportForecast={reportForecast}
              setReportCurr={setReportCurr}
              setReportForecast={setReportForecast}
              setReportLoc={setReportLoc}
              setCoor={setCoor}
              key={key} /> : <></>
          }

        </div>
      </div>
      <div className='w-2/6' style={{
        backgroundColor: "#2f3473",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.6),rgb(10, 34, 99))",
        height: "100%"
      }}>
        {
          reportLoc ? <Menu3 reportLoc={reportLoc} coor={coor}
            reportCurr={reportCurr} city={city}
            reportForecast={reportForecast} /> : <></>
        }
      </div>
    </div>
  )
}

export default Dashboard