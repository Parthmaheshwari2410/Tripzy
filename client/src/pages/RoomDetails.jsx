import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allData, assets, facilityIcons, roomCommonData } from '../assets/assets'
import StarRating from '../component/Hotels/StarRating'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)



    useEffect(() => {
        const idParts = id.split('-');
        const originalId = idParts[0];
        const index = parseInt(idParts[idParts.length - 1]);

        const matchingRooms = allData.filter(r => r._id === originalId);
        const selectedRoom = matchingRooms[index] || matchingRooms[0];

        if (selectedRoom) {
            setRoom(selectedRoom);
            setMainImage(selectedRoom.images[0]);
        }
    }, [id])
    return room && (

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotelName}<span className='font-inter text-sm'>
                    ({room.roomType})  </span></h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% oFF</p>
            </div>

            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt='location-icon' />
                <span>{room.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt='Room Image'
                        className='w-full rounded-xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                            key={index} src={image} alt='Room Image'
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience luxury like never before
                    </h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='texs-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
            </div>
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl '>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>check-In</label>
                        <input type="date" id='checkInDate' placeholder='Check In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required
                        />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden '></div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>check-Out</label>
                        <input type="date" id='checkOutDate' placeholder='Check Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required
                        />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden '></div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="Number" id='Guest' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required
                        />
                    </div>
                </div>
                <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer '>
                    Check Availability
                </button>
            </form>
            <div className='mt-25 space-y-4 gap-6'>

                {roomCommonData.map((spec, index) => (
                    <div key={index}>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>Experience a world-class stay that blends comfort, style, and affordability in the heart of your destination. Perfectly located close to major attractions, beaches, and vibrant local hotspots, this hotel puts you right where the action is. Relax in thoughtfully designed rooms that offer modern amenities and a calm, welcoming atmosphere. Start your day with refreshing views and unwind by the pool in the afternoon. Enjoy seamless service, clean interiors, and attention to every detail for a stress-free stay. Whether you’re traveling for leisure or work, the space is designed to suit your needs. Step out and explore lively streets, nightlife, and local culture just minutes away. After a day of adventure, return to comfort and relaxation. Ideal for couples, families, and solo travelers alike. A memorable stay awaits, where convenience meets exceptional hospitality.</p>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={room.owner} alt="host" className='h-14 w-14 md:h-14 md:w-14 rounded-full' />
                    <div>
                        <p className='text-lg md:text-xl'>Hosted by {room.hotelName}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p className='ml-2'>200+ Reviews</p>
                        </div>
                    </div>
                </div>
                <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
            </div>
        </div>
    )

}

export default RoomDetails