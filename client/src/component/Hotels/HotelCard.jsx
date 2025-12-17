


import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const HotelCard = ({ room, index }) => {
  const uniqueId = `${room._id}-${index}`;
  return (

    <Link
      to={`/rooms/${uniqueId}`}
      key={room._id} onClick={() => scrollTo(0, 0)}
      className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] '>
      <img src={room.hotelImage} alt="" />
      {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Saller</p>}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => mutation.mutate({ id: postId, type: "like" })}
      >
        <path
          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
          stroke={room.isLiked ? "#e50829" : "#000000"}
          strokeWidth="2"
          className={`w-6 h-6 stroke-[2px] ${room.isLiked ? 'fill-brandRed stroke-brandRed' : 'fill-none stroke-black'}`}
        />
      </svg>
      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
          <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotelName}</p>

          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="star-icon" /> 4.5
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm'>
          <img src={assets.locationIcon} alt="location-icon" />
          <span >{room.address} </span>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <p><span className='text-xl text-gray-800'>{room.hotelPrice}</span></p>

          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>Book Now</button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard