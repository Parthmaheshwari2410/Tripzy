


import React from 'react'
import { allData} from '../../assets/assets'

import Title from '../Mains/Title' 
import { useNavigate } from 'react-router-dom'
import PlacesToStay from './PlacesToStay'
import { useCity } from '../../context/CityContext'



const TopPlacesToStay = () => {
  const navigate = useNavigate()
  
  const { selectedCity } = useCity();
  const filteredRooms = selectedCity
    ? allData.filter((room) => room.city.toLowerCase() === selectedCity)
    : allData;
  
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-10'>
         <div className="w-full flex justify-between items-center mb-0 pl-22 pr-22">
        <Title title="places to stay"/>
         <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
            View All Hotels
        </button>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-0'>
            {filteredRooms.slice(0,6).map((room,index)=>(
                <PlacesToStay key={room._id} room={room} index={index}/>
            ))}
        </div>
       
    </div>
  )
}

export default TopPlacesToStay