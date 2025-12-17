import React, { useState } from 'react'
import { allData, assets, faciIcons, facilityIcons } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/Hotels/StarRating.jsx'
import { useCity } from '../context/CityContext.jsx'

const CheckBox = ({ label, selected = false, onChange = () => { } }) => (
  <label className="flex gap-2 items-center cursor-pointer mt-1 text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
)

const RadioButton = ({ label, selected, onChange }) => (
  <label className="flex gap-2 items-center cursor-pointer mt-1 text-sm">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
)


const getPriceNumber = (price) => {
  if (!price) return 0
  return Number(price.toString().replace(/[^0-9]/g, ''))
}

const AllRestarents = () => {
  const navigate = useNavigate()
  const { selectedCity } = useCity()

  const [selectedMenuTypes, setSelectedMenuTypes] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

  const menuTypes = ['Italian', 'Mexican', 'Chinese', 'American']
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 1500', '1500 to 2000']
  const sortOptions = ['Price Low to High', 'Price High to Low']


  const handleMenuTypeChange = (checked, label) => {
    setSelectedMenuTypes((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    )
  }

  const handlePriceRangeChange = (checked, label) => {
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, label] : prev.filter((item) => item !== label)
    )
  }

  const handleSortChange = (label) => {
    setSelectedSort(label)
  }

  const clearAllFilters = () => {
    setSelectedMenuTypes([])
    setSelectedPriceRanges([])
    setSelectedSort('')
  }

  let filteredRestarents = allData.filter((menu) => {
    if (
      selectedCity &&
      menu.city?.toLowerCase() !== selectedCity.toLowerCase()
    ) {
      return false
    }

    if (
      selectedMenuTypes.length > 0 &&
      !selectedMenuTypes.includes(menu.category)
    ) {
      return false
    }

    if (selectedPriceRanges.length > 0) {
      const price = getPriceNumber(menu.restarentsPrices)
      const match = selectedPriceRanges.some((range) => {
        const [min, max] = range.split(' to ').map(Number)
        return price >= min && price <= max
      })
      if (!match) return false
    }

    return true
  })

  if (selectedSort === 'Price Low to High') {
    filteredRestarents.sort(
      (a, b) =>
        getPriceNumber(a.restarentsPrices) -
        getPriceNumber(b.restarentsPrices)
    )
  }

  if (selectedSort === 'Price High to Low') {
    filteredRestarents.sort(
      (a, b) =>
        getPriceNumber(b.restarentsPrices) -
        getPriceNumber(a.restarentsPrices)
    )
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row pt-28 px-6 pb-12">

      <div className="w-full lg:w-64 bg-white border border-gray-300 mb-6 lg:mb-0 lg:mr-6 rounded-lg lg:max-h-[75vh] overflow-y-auto">
        <div className="flex justify-between px-4 py-2 border-b">
          <p className="font-medium text-sm">FILTERS</p>
          <span
            onClick={clearAllFilters}
            className="cursor-pointer text-xs font-medium"
          >
            CLEAR
          </span>
        </div>

        <div className="px-4 py-3">
          <p className="font-medium mb-1 text-sm">Cuisine</p>
          {menuTypes.map((menu) => (
            <CheckBox
              key={menu}
              label={menu}
              selected={selectedMenuTypes.includes(menu)}
              onChange={handleMenuTypeChange}
            />
          ))}
        </div>

        <div className="px-4 py-3">
          <p className="font-medium mb-1 text-sm">Price Range</p>
          {priceRanges.map((range) => (
            <CheckBox
              key={range}
              label={range}
              selected={selectedPriceRanges.includes(range)}
              onChange={handlePriceRangeChange}
            />
          ))}
        </div>

        <div className="px-4 py-3">
          <p className="font-medium mb-2 text-sm">Sort By</p>
          {sortOptions.map((option) => (
            <RadioButton
              key={option}
              label={option}
              selected={selectedSort === option}
              onChange={handleSortChange}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:flex-1">
        <h1 className="font-playfair text-4xl mb-6">All Restaurants</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRestarents.map((menu, index) => (
            <div
              key={`${menu._id}-${index}`}
              className="rounded-xl bg-white shadow-md overflow-hidden"
            >
              <img
                src={menu.restarentsImages}
                alt={menu.restarentsName}
                onClick={() => {
                  navigate(`/restarents/${menu._id}`)
                  window.scrollTo(0, 0)
                }}
                className="h-56 w-full object-cover cursor-pointer hover:scale-110 transition"
              />

              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-500 text-sm">{menu.city}</p>

                <p
                  onClick={() => {
                    className = "text-xl font-playfair cursor-pointer hover:text-indigo-600"
                    const uniqueId = `${menu._id}-${index}`;
                    navigate(`/restarents/${uniqueId}`);
                    scrollTo(0, 0)
                  }}>
                  {menu.restarentsName}
                </p>

                <div className="flex items-center">
                  <StarRating rating={menu.ratinggg || 4} />
                  <span className="ml-2 text-sm">200+ Reviews</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.isArray(menu.amenitie) &&
                    menu.amenitie.map((item, i) => (
                      <div
                        key={`${item}-${i}`}
                        className="flex items-center gap-1 px-2 py-1 bg-[#F5F5FF]/70 rounded text-xs"
                      >
                        <img
                          src={faciIcons[item]}
                          alt={item}
                          className="w-3 h-3"
                        />
                        {item}
                      </div>
                    ))}
                </div>

                <p className="text-lg font-semibold mt-auto">
                  {menu.restarentsPrices}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllRestarents
