import React, { useState } from 'react'
import { allData, assets, facilityIcons } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/Hotels/StarRating.jsx'
import { useCity } from '../context/CityContext.jsx'


const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}


const RadioButton = ({ label, selected = true, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="radio" name="sortOption" checked={selected} onChange={(e) => onChange(label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}
const AllRestarents = () => {
  const navigate = useNavigate()
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedMenuTypes, setSelectedMenuTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const menuTypes = [
    "Italian",
    "Mexican",
    "Chinese",
    "American",
  ];
  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 1500',
    '1500 to 2000',
  ];
  const sortOperations = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const handleMenuTypeChange = (checked, label) => {
    if (checked) {
      setSelectedMenuTypes(prev => [...prev, label]);
    } else {
      setSelectedMenuTypes(prev => prev.filter(item => item !== label));
    }
  };

  const handlePriceRangeChange = (checked, label) => {
    if (checked) {
      setSelectedPriceRanges(prev => [...prev, label]);
    } else {
      setSelectedPriceRanges(prev => prev.filter(item => item !== label));
    }
  };

  const clearAllFilters = () => {
    setSelectedMenuTypes([]);
    setSelectedPriceRanges([]);
  };
  const { selectedCity } = useCity();
  const filteredRestarents = selectedCity
    ? allData.filter((menu) => menu.city.toLowerCase() === selectedCity)
    : allData;

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 lg:mb-10 '>
      <div className='bg-white w-full lg:w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 lg:mr-10'>
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span onClick={() => { setOpenFilters(!openFilters) }} className='lg:hidden'>
              {openFilters ? "HiDE" : "SHOW"}
            </span>
            <span onClick={clearAllFilters} className='hidden lg:block'>CLEAR</span>
          </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
            {menuTypes.map((menu, index) => (
              <CheckBox key={index} label={menu}
                selected={selectedMenuTypes.includes(menu)}
                onChange={handleMenuTypeChange} />
            ))}
          </div>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`}
                selected={selectedPriceRanges.includes(`$ ${range}`)}
                onChange={handlePriceRangeChange} />
            ))}
          </div>
          <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortOperations.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-3/4'>
        <div className='flex flex-col items-start text-left mb-10'>
          <h1 className='font-playfair text-4xl md:text-[40px]'>All Restaurents</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredRestarents.map((menu) => (
            <div key={menu._id} className='flex flex-col rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
              <img onClick={() => { navigate(`/restarents/${menu._id}`); scrollTo(0, 0); }} src={menu.restarentsImages}
                alt="restaurant-img" title='View Room Details' className='h-48 w-full object-cover cursor-pointer' />
              <div className='p-4 flex flex-col gap-2'>
                <p className='text-gray-500 text-sm'>{menu.city}</p>
                <p
                  onClick={() => { navigate(`/restarents/${menu._id}`); scrollTo(0, 0); }}
                  className='text-gray-800 text-xl font-playfair cursor-pointer hover:text-indigo-600'
                >
                  {menu.restarentsName}
                </p>
                <div className='flex items-center'>
                  <StarRating />
                  <p className='ml-2 text-sm text-gray-600'>200+ Reviews</p>
                </div>
                <div className='flex items-center gap-2 text-gray-500 mt-1 text-sm'>
                  <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
                  <span>{menu.address}</span>
                </div>
                <div className="flex flex-wrap items-center mt-3 mb-2 gap-2">
                  {menu.amenitie.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F5F5FF]/70 text-xs">
                      <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <p className='text-base font-semibold text-gray-800 mt-auto'>{menu.restarentsPrices}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default AllRestarents
