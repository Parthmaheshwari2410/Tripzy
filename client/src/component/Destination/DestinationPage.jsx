
import React, { useEffect, useState } from 'react';
import TopDestination from './TopDestination.jsx';
import TopPlacesToStay from './TopPlacesToStay.jsx';
import TopFoodAndDrink from './TopFoodAndDrink.jsx';
import MapComponent from './MapPin.jsx';
import { allData } from '../../assets/assets.js';
import { useCity } from '../../context/CityContext.jsx';
import StarRating from '../Hotels/StarRating.jsx';
import { useLocation } from 'react-router-dom';
import axios from "axios"
const DestinationPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('Essentials');
  const { selectedCity } = useCity();

  const location = useLocation();
  const [currWeather, setCurrWeather] = useState(null)

  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city');

  async function getWeatherApi(city) {
    try {
      const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
      let { latitude, longitude } = geoRes.data.results[0]


      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      setCurrWeather(weatherRes.data.current_weather);
    } catch (error) {
      console.warn(error)
    }
  }
  useEffect(() => {
    if (city) {
      getWeatherApi(city)
    }
  }, [city])



  const filteredData = selectedCity
    ? allData.filter(item => item.city.toLowerCase() === selectedCity)
    : allData;
  const destinationData = filteredData[0];

  return (
    <div className="min-h-screen bg-gray-50  ">
      {destinationData && (
        <div>
          <div className="relative h-96 w-375 mt-[20px] mx-auto rounded-2xl overflow-hidden shadow-lg ">
            <img
              src={destinationData.image}
              alt={destinationData.city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{destinationData.city}</h1>
              <p className="text-lg opacity-90 max-w-2xl">{destinationData.description}</p>
              <div className="flex items-center mt-4">
                <StarRating />
                <span className="ml-2 text-lg">{destinationData.ratinggg}</span>
              </div>
            </div>

            <div className=" absolute right-10 top-20 bg-tra shadow-md rounded-xl p-8 w-full max-w-md mx-auto mt-14 bg-gray-300 pl-22 mr-10">
              <h2 className="text-xl font-semibold text-black mb-4">🌦️ Current Weather : {city}</h2>

              <div className="grid grid-cols-2 gap-4 text-black">
                <div>
                  <p className="text-sm font-medium">Temperature</p>
                  <p className="text-lg font-bold">{currWeather?.temperature}°C</p>
                </div>

                <div>
                  <p className="text-sm font-medium">Weather Code</p>
                  <p className="text-lg font-bold">{currWeather?.weathercode}</p>
                </div>

                <div>
                  <p className="text-sm font-medium">Wind Speed</p>
                  <p className="text-lg font-bold">{currWeather?.windspeed} km/h</p>
                </div>

                <div>
                  <p className="text-sm font-medium">Wind Direction</p>
                  <p className="text-lg font-bold">{currWeather?.winddirection}°</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-0 mt-2 mr-168 text-center">
            <p className="text-2xl font-extrabold mr-18">Essential {destinationData.city}</p>
            <p className="text-gray-600 text-base ml-4">Pick a category to filter your recs</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-3 flex-wrap items-center justify-center mb-2 mr-80">
              {destinationData.categories && destinationData.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 cursor-pointer   
                  ${selectedCategory === category
                      ? 'border-black text-black font-bold'
                      : 'border-gray-400 text-gray-700'}`} >
                  <span>{category}</span>
                </button>
              ))}
            </div>

            <TopDestination />
            <TopPlacesToStay />
            <TopFoodAndDrink />
            <section className="mb-12">
              <MapComponent destination={destinationData.city} />
            </section>
          </div>
        </div>
      )}

    </div>
  );
};

export default DestinationPage;



