import React from 'react'
import '../components/weather.css'

export default function WeatherCard({tempInfo}) {

const {
  temp, pressure, humidity, country, speed, main, name, sunset
} = tempInfo


  return (
    <div className='weather'>
       <div className="card">
      <div className="b">
        <div className="b1">
          <i className="fa-solid fa-cloud icon-img"></i>
        </div>


        <div className="b2">
          <div className="c1">
            <p className="temp-txt">{tempInfo.temp}</p>
            
          </div>
          <div className="c2">
          <div className='c21'>
          <p className="temp-txt-name">Sunny</p>
          </div>
         <div className='c22'>
         <p className="temp-city">{tempInfo.name}</p>
            <p className="temp-country">{tempInfo.country}</p>
         </div>
          </div>
         <div className='c3'>
         <p className="temp-date">7/7/20</p>
            <p className="temp-time">4:30 PM</p>
         </div>
           
          
          </div>
        

        <div className="b3">
          <div className="d1">
            <p className="text10">
             {tempInfo.sunset}
             <br></br>
             <br></br>
             <span className='span-txt'>SUNSET</span> 
            </p>
            </div>
            <div className='d2'>
            <p className="text10">
             {tempInfo.humidity}
             <br></br>
             <br></br>
             <span className='span-txt'>HUMIDITY</span> 
            </p>
            </div>
            
         
          <div className="d3">
            <p className="text10">
          {tempInfo.pressure}
            <br></br>
            <br></br>
            <span className='span-txt'>PRESSURE</span> 
            </p>
            </div>
            <div className='d4'>
            <p className="text10">
             {tempInfo.main}
             <br></br>
             <br></br>
             <span className='span-txt'>SPEED</span> 
            </p>
            </div>
         
          
        </div>
      </div>
    </div>
    </div>
  )
}
