
import React, { useState } from 'react'
import { allData, assets, facilityIcons } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/Hotels/StarRating.jsx'
import { useCity } from '../context/CityContext.jsx'

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected, onChange }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const AllRooms = () => {
  const navigate = useNavigate()
  const { selectedCity } = useCity()

  const [openFilters, setOpenFilters] = useState(false)
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])

  const roomTypes = [
    'Single Bed',
    'Family Suite',
    'Double Bed',
    'Luxury Room',
  ]

  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 1500',
    '1500 to 2000',
  ]

  const sortOperations = [
    'Price Low to High',
    'Price High to Low',
    'Newest First',
  ]

  const handleMenuTypeChange = (checked, label) => {
    setSelectedRoomTypes((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    )
  }

  const handlePriceRangeChange = (checked, label) => {
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    )
  }

  const clearAllFilters = () => {
    setSelectedRoomTypes([])
    setSelectedPriceRanges([])
  }

  const filteredRooms = selectedCity
    ? allData.filter(
      (room) => room.city?.toLowerCase() === selectedCity.toLowerCase()
    )
    : allData

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pb-12">

      <div className="w-full lg:w-[calc(100%-340px)]">
        <div className="mb-10">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl">
            All Hotels
          </h1>
          <p className="text-gray-500 mt-2 max-w-3xl">
            Take advantage of our limited-time offers and special packages.
          </p>
        </div>

        <div className="space-y-8">
          {Array.isArray(filteredRooms) &&
            filteredRooms.map((room, index) => (
              <div
                key={`${room._id}-${index}`}
                className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-300"
              >


                <div className="w-full md:w-2/5">
                  <img
                    onClick={() => {
                      const uniqueId = `${room._id}-${index}`;
                      navigate(`/rooms/${uniqueId}`);
                      scrollTo(0, 0)
                    }}
                    src={room.hotelImage}
                    alt="hotel-img"
                    className="w-full h-56 md:h-64 lg:h-72 rounded-xl object-cover cursor-pointer shadow-lg hover:shadow-xl"
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col gap-3">
                  <p className="text-gray-500">{room.city}</p>

                  <p
                    onClick={() => {
                      const uniqueId = `${room._id}-${index}`;
                      navigate(`/rooms/${uniqueId}`);
                      scrollTo(0, 0)
                    }}

                    className="text-2xl lg:text-3xl font-playfair cursor-pointer hover:text-indigo-600"
                  >
                    {room.hotelName}
                  </p>

                  <div className="flex items-center gap-2">
                    <StarRating rating={room.rating || 4} />
                    <span className="text-sm">200+ Reviews</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="w-4 h-4"
                    />
                    <span>{room.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {Array.isArray(room.amenities) &&
                      room.amenities.map((item, i) => (
                        <div
                          key={`${item}-${i}`}
                          className="flex items-center gap-2 px-3 py-2 bg-[#F5F5FF]/70 rounded-lg"
                        >
                          <img
                            src={facilityIcons[item]}
                            alt={item}
                            className="w-4 h-4"
                          />
                          <span className="text-xs">{item}</span>
                        </div>
                      ))}
                  </div>

                  <p className="text-xl font-semibold text-gray-700 mt-auto">
                    {room.hotelPrice}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full lg:w-80 lg:ml-6 bg-white border border-gray-300 rounded-lg lg:sticky lg:top-24 mb-6 lg:mb-0">

        <div className="flex justify-between px-5 py-3 border-b">
          <p className="font-medium">FILTERS</p>
          <span
            onClick={clearAllFilters}
            className="cursor-pointer text-sm font-medium hover:text-black"
          >
            CLEAR
          </span>
        </div>

        <div className="px-5 py-4">
          <p className="font-medium mb-2">Room Type</p>
          {roomTypes.map((room) => (
            <CheckBox
              key={room}
              label={room}
              selected={selectedRoomTypes.includes(room)}
              onChange={handleMenuTypeChange}
            />
          ))}
        </div>

        <div className="px-5 py-4">
          <p className="font-medium mb-2">Price Range</p>
          {priceRanges.map((range) => (
            <CheckBox
              key={range}
              label={`$ ${range}`}
              selected={selectedPriceRanges.includes(`$ ${range}`)}
              onChange={handlePriceRangeChange}
            />
          ))}
        </div>

        <div className="px-5 py-4">
          <p className="font-medium mb-2">Sort By</p>
          {sortOperations.map((option) => (
            <RadioButton key={option} label={option} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllRooms
