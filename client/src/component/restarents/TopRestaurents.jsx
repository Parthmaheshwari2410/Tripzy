

import React from 'react'
import { allData } from '../../assets/assets.js'

import Title from '../Mains/Title.jsx'
import { useNavigate } from 'react-router-dom'
import RestaurentCard from './RestaurentCard.jsx'

const TopRestaurents = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center px-6 lg:px-24 bg-slate-50 py-20">
            <Title
                title="Top Restaurants"
                subTitle="Take advantage of our limited-time offers."
            />

            <div className="flex flex-wrap gap-6 mt-20">
                {allData.slice(0, 4).map((menu, index) => (
                    <RestaurentCard
                        key={`${menu._id}-${index}`}
                        room={menu}
                        index={index}
                    />
                ))}
            </div>

            <button
                onClick={() => {
                    navigate('/restarents')
                    window.scrollTo(0, 0)
                }}
                className="my-16 px-4 py-2 border rounded"
            >
                View All Restaurants
            </button>
        </div>
    )
}

export default TopRestaurents
