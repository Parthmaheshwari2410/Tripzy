

import React from 'react'
import { allData } from '../../assets/assets.js'

import { useNavigate } from 'react-router-dom'

import FoodAndDrink from './FoodAndDrink.jsx'
import Title from '../Mains/Title.jsx'
import { useCity } from '../../context/CityContext.jsx'


const TopFoodAndDrink = () => {
  const navigate = useNavigate()
  const { selectedCity } = useCity();
  const filteredRestaurent = selectedCity
    ? allData.filter((menu) => menu.city.toLowerCase() === selectedCity)
    : allData;


  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-10'>

      <div className="w-full flex justify-between items-center mb-0 pl-22 pr-22">
        <Title title="Top Restaurents" />
        <button
          onClick={() => {
            navigate('/restarents');
            scrollTo(0, 0);
          }}
          className='px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
        >
          View All Restaurents
        </button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-6 mt-0'>
        {filteredRestaurent.slice(0, 6).map((menu, index) => (
          <FoodAndDrink key={menu._id} room={menu} index={menu} />
        ))}
      </div>

    </div>


  )
}

export default TopFoodAndDrink



