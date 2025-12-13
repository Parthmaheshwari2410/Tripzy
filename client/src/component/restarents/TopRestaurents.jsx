

import React from 'react'
import { allData } from '../../assets/assets.js'

import Title from '../Mains/Title.jsx'
import { useNavigate } from 'react-router-dom'
import RestaurentCard from './RestaurentCard.jsx'




const TopRestaurents = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title="Top Restaurents" subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." />
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {allData.slice(0, 4).map((menu, index) => (
                    <RestaurentCard key={menu._id} room={menu} index={menu} />
                ))}
            </div>
            <button onClick={() => { navigate('/restarents'); scrollTo(0, 0) }} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
                View All Restaurents
            </button>
        </div>
    )
}

export default TopRestaurents