

import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets.js'


const RestaurentCard = ({ room, index }) => {
    if (!room) return null
    const uniqueId = `${room._id}-${index}`;
    return (

        <Link
            to={`/restarents/${uniqueId}`}
            onClick={() => window.scrollTo(0, 0)}
            className="relative w-72 rounded-xl overflow-hidden bg-white shadow-md"
        >
            <img
                src={room.restarentsImages}
                alt={room.restarentsName}
                className="w-full h-48 object-cover"
            />

            {index % 2 === 0 && (
                <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white rounded-full">
                    Best Seller
                </p>
            )}

            <div className="p-4">
                <div className="flex justify-between">
                    <p className="font-playfair text-lg">{room.restarentsName}</p>
                    <span className="flex items-center gap-1">
                        <img src={assets.starIconFilled} alt="star" /> 4.5
                    </span>
                </div>

                <p className="text-sm text-gray-500">{room.address}</p>

                <div className="flex justify-between mt-4">
                    <span className="text-lg font-semibold">
                        {room.restarentsPrices}
                    </span>
                    <button className="px-3 py-1 border rounded text-sm">
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default RestaurentCard


