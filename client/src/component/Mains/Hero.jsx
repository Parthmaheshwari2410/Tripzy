import React, { useEffect, useState } from 'react'
import { assets, cities } from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { useCity } from '../../context/CityContext.jsx'


import hero1 from "../../assets/HeroImage.avif"
import hero2 from "../../assets/heroImage.jpeg"
import hero3 from "../../assets/heroImage2.jpeg"
import hero4 from "../../assets/heroImage4.jpg"
import hero5 from "../../assets/heroImage5.jpg"
import hero6 from "../../assets/heroImage6.jpeg"
import hero7 from "../../assets/heroImage8.jpeg"



const Hero = () => {

  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const { setSelectedCity } = useCity()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = e.target.destination.value.trim()

    if (city) {
      const cityParam = city.toLowerCase()
      setSelectedCity(cityParam)
      navigate(`/destinations?city=${encodeURIComponent(cityParam)}`)
    }
  }

  return (
    <div
      className='flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-white bg-no-repeat bg-cover bg-center min-h-screen h-screen transition-all duration-1000 ease-in-out'
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      <p className='bg-[#49B9FF]/50 px-3 sm:px-4 py-1 rounded-full mt-20 text-sm sm:text-base'>
        Where to?
      </p>

      <h1 className='font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-snug font-bold max-w-full sm:max-w-xl lg:max-w-2xl mt-4'>
        Discover Your Perfect Getaway Destination
      </h1>

      <p className='max-w-full sm:max-w-lg mt-2 text-sm sm:text-base md:text-lg'>
        Book the best part of your trip
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white text-gray-500 rounded-lg px-4 sm:px-6 py-4 mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'
      >
        <div className='flex-1 sm:flex-initial'>
          <div className='flex items-center gap-1 mb-2'>
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label className='text-sm sm:text-base'>Destination</label>
          </div>

          <input
            list='destinations'
            name="destination"
            type="text"
            className="w-full sm:w-auto rounded border border-gray-200 px-3 py-2 text-sm sm:text-base outline-none"
            placeholder="Type here"
            required
          />

          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <button className='flex items-center justify-center gap-2 rounded-md bg-black py-3 px-4 sm:px-6 text-white cursor-pointer hover:bg-gray-800 transition-colors sm:self-end'>
          <img src={assets.searchIcon} alt="search" className='h-5 sm:h-6' />
          <span className='text-sm sm:text-base'>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero