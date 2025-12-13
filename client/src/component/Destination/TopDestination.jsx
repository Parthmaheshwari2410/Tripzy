
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
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-10'>
      <div className="w-full flex justify-between items-center mb-0 pl-22 pr-22">
        <Title title="Things to do" />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-0'>
        {filteredDestination.slice(0, 6).map((area, index) => (
          <Destinationcard key={area._id} room={area} index={area} />
        ))}
      </div>
    </div>
  )
}

export default TopDestination