
import React from 'react'
import { allData } from '../../assets/assets.js'
import Title from '../Mains/Title.jsx'
import Destinationcard from './Destinationcard.jsx'
import { useCity } from '../../context/CityContext.jsx'
const TopDestination = () => {
  const { selectedCity } = useCity();
  const filteredDestination = selectedCity
    ? allData.filter((area) => area.city.toLowerCase() === selectedCity)
    : allData;

  return (
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50 py-8 sm:py-10 lg:py-12'>
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <Title title="Things to do" />
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full'>
        {filteredDestination.slice(0, 6).map((area, index) => (
          <Destinationcard key={area._id} room={area} index={area} />
        ))}
      </div>
    </div>
  )
}

export default TopDestination