
import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets.js'

const PlacesToStay = ({ room, index }) => {
    return (
        <Link
            to={'/rooms/' + room._id}
            onClick={() => scrollTo(0, 0)}
            key={room._id}
            className='relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[280px] rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-md hover:shadow-xl transition-shadow'
        >
            <div className='relative w-full h-48 sm:h-56 overflow-hidden'>
                <img
                    src={room.hotelImage}
                    alt={room.hotelName}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                />
            </div>
            <div className='p-4'>
                <div className='flex items-start justify-between gap-2'>
                    <p className='font-playfair text-lg sm:text-xl font-medium text-gray-800 line-clamp-1'>
                        {room.hotelName}
                    </p>
                    <div className='flex items-center gap-1 flex-shrink-0'>
                        <img src={assets.starIconFilled} alt="star" className='w-4 h-4' />
                        <span className='text-sm'>4.5</span>
                    </div>
                </div>

                <div className='flex items-center gap-1 text-sm mt-2'>
                    <img src={assets.locationIcon} alt="location" className='w-4 h-4 flex-shrink-0' />
                    <span className='line-clamp-1'>{room.address}</span>
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2'>
                    <p className='text-lg sm:text-xl text-gray-800 font-semibold'>
                        {room.hotelPrice}
                    </p>
                    <button className='w-full sm:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all whitespace-nowrap'>
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default PlacesToStay