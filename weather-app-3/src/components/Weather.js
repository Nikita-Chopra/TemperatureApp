import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import '../components/weather.css'
import SearchBar from './SearchBar'

export default function Weather() {
const [searchValue, setSearchValue] = useState("pune")
const [tempInfo, setTempInfo] = useState(" ")



    const getInfo = async()=>{
let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ab5cb14feaec384c5a4140dabd365adb`
const res =  await fetch (url)
const data = await res.json()
console.log(data)

const {temp, pressure, humidity} = data.main
const {country, sunset} = data.sys
const {speed} = data.wind
const {main} = data.weather[0]
  const {name} = data

  console.log(temp, name, main)

  const weatherInfo = {
    temp, pressure, humidity, country, speed, main, name, sunset
  }

setTempInfo(weatherInfo)

    }

useEffect(()=>{
    getInfo()
},[])
  


  return (
    <div className='main'>
      <SearchBar getInfo={getInfo} searchValue={searchValue} 
      setSearchValue={setSearchValue}/>
      <WeatherCard  tempInfo={tempInfo}/>
    </div>
  )
}
