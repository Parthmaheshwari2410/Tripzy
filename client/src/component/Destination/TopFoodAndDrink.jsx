

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
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50 py-8 sm:py-10 lg:py-12'>
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <Title title="Top Restaurants" />
        <button
          onClick={() => {
            navigate('/restarents');
            scrollTo(0, 0);
          }}
          className='w-full sm:w-auto px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all whitespace-nowrap'
        >
          View All Restaurants
        </button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full'>
        {filteredRestaurent.slice(0, 6).map((menu, index) => (
          <FoodAndDrink key={menu._id} room={menu} index={menu} />
        ))}
      </div>
    </div>
  )
}
export default TopFoodAndDrink