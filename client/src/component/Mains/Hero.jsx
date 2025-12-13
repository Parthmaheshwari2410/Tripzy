import React, { useEffect, useState } from 'react'
import { assets, cities } from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom';
import { useCity } from '../../context/CityContext.jsx';



const Hero = () => {

  const heroImages = [
    "/src/assets/HeroImage.avif",
    "/src/assets/heroImage.jpeg",
    "/src/assets/heroImage2.jpeg",
    "/src/assets/heroImage4.jpg",
    "/src/assets/heroImage5.jpg",
    "/src/assets/heroImage6.jpeg",
    "/src/assets/heroImage8.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const { setSelectedCity } = useCity();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.destination.value.trim();

    if (city) {
      const cityParam = city.toLowerCase();
      setSelectedCity(cityParam);
      navigate(`/destinations?city=${encodeURIComponent(cityParam)}`);
    }
  };
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen transition-all duration-1000 ease-in-out' style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}>
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>Where to?</p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56xl] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Getaway Destination</h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>Book the best part of your trip</p>


      <form onSubmit={(e) => { handleSubmit(e); }} className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>


        <div>
          <div className='flex items-center gap-1'>
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input list='destinations' id="destinationInput" name="destination" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
          <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero

