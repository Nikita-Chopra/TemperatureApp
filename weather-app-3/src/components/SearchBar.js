import React from 'react'
import '../components/searchbar.css'


export default function SearchBar({getInfo, searchValue, setSearchValue}) {
  return (
    <div className='search'>
    <div className='a'>
    <input type="text" className="text1" placeholder="" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
    <button className='btn' onClick={()=>getInfo()}>SEARCH</button>
    </div>
     
    </div>
  )
}
