


import React from 'react'
import { allData } from '../../assets/assets'

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
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50 py-8 sm:py-10 lg:py-12'>
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <Title title="Places to Stay" />
        <button
          onClick={() => {
            navigate('/rooms');
            scrollTo(0, 0)
          }}
          className='w-full sm:w-auto px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all whitespace-nowrap'
        >
          View All Hotels
        </button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full'>
        {filteredRooms.slice(0, 6).map((room, index) => (
          <PlacesToStay key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}

export default TopPlacesToStay