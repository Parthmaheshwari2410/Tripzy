
import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets.js'

const FoodAndDrink = ({ room, index }) => {
    return (
        <Link
            to={'/restarents/' + room._id}
            onClick={() => scrollTo(0, 0)}
            key={room._id}
            className='relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[280px] rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-md hover:shadow-xl transition-shadow'
        >
            <div className='relative w-full h-48 sm:h-56 overflow-hidden'>
                <img
                    src={room.restarentsImages}
                    alt={room.restarentsName}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                />
                {index % 2 === 0 && (
                    <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>
                        Best Seller
                    </p>
                )}
            </div>
            <div className='p-4'>
                <div className='flex items-start justify-between gap-2'>
                    <p className='font-playfair text-lg sm:text-xl font-medium text-gray-800 line-clamp-1'>
                        {room.restarentsName}
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

                <div className='flex items-center justify-between mt-4'>
                    <p className='text-lg sm:text-xl text-gray-800 font-semibold'>
                        {room.restarentsPrices}
                    </p>
                </div>
            </div>
        </Link>
    )
}
export default FoodAndDrink

