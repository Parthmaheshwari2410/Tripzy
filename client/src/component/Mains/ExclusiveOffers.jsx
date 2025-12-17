import React from 'react'
import Title from './Title.jsx'
import { assets, exclusiveOffers } from '../../assets/assets.js'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 sm:gap-6'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <button className='group flex items-center gap-2 font-medium cursor-pointer text-sm sm:text-base hover:gap-3 transition-all'>
          View All Offers
          <img src={assets.arrowIcon} alt="arrow" className='w-4 h-4 group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='group relative flex flex-col items-start justify-between gap-1 pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-5 rounded-xl text-white bg-no-repeat bg-cover bg-center min-h-[280px] sm:min-h-[320px]'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
              {item.priceOff}% OFF
            </p>

            <div className='space-y-1 sm:space-y-2'>
              <p className='text-xl sm:text-2xl font-medium font-playfair line-clamp-2'>
                {item.title}
              </p>
              <p className='text-sm sm:text-base line-clamp-2'>{item.description}</p>
              <p className='text-xs text-white/70 mt-2 sm:mt-3'>
                Expires {item.expiryDate}
              </p>
            </div>

            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-4 sm:mb-5 text-sm sm:text-base hover:gap-3 transition-all'>
              View Offers
              <img
                className='invert group-hover:translate-x-1 transition-all w-4 h-4'
                src={assets.arrowIcon}
                alt="arrow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ExclusiveOffers