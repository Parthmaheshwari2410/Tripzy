
import React from 'react'
import { allData } from '../../assets/assets.js'
import { useCity } from '../../context/CityContext.jsx'
import Title from '../Mains/Title.jsx'
import Place from './Place.jsx'


const Topplace = () => {
    const { selectedCity } = useCity()

    const filteredDestination = selectedCity
        ? allData.filter(
            (area) => area.city?.toLowerCase() === selectedCity.toLowerCase()
        )
        : allData

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50 py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
                <Title title="Top Attractions" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                {filteredDestination.slice(0, 4).map((area, index) => (
                    <Place
                        key={`${area._id}-${index}`}
                        room={area}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Topplace
