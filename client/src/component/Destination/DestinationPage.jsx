
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
    <div className="min-h-screen bg-gray-50">
      {destinationData && (
        <div>

          <div className="relative w-full max-w-7xl mt-4 sm:mt-6 lg:mt-8 mx-auto px-4 sm:px-6 lg:px-8">

            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={destinationData.image}
                alt={destinationData.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-80 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {destinationData.city}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg opacity-90 line-clamp-2 sm:line-clamp-3">
                  {destinationData.description}
                </p>
                <div className="flex items-center mt-2 sm:mt-4">
                  <StarRating />
                  <span className="ml-2 text-base sm:text-lg">{destinationData.ratinggg}</span>
                </div>
              </div>

              {currWeather && (
                <div className="hidden lg:block absolute top-8 right-8 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-6 w-72">
                  <h2 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <span>🌦️</span>
                    <span>Current Weather</span>
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-black text-sm">
                    <div>
                      <p className="font-medium text-gray-600 text-xs">Temperature</p>
                      <p className="text-xl font-bold">{currWeather?.temperature}°C</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 text-xs">Weather Code</p>
                      <p className="text-xl font-bold">{currWeather?.weathercode}</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 text-xs">Wind Speed</p>
                      <p className="text-xl font-bold">{currWeather?.windspeed} km/h</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 text-xs">Wind Direction</p>
                      <p className="text-xl font-bold">{currWeather?.winddirection}°</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {currWeather && (
              <div className="lg:hidden mt-4 bg-white shadow-lg rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4 flex items-center gap-2">
                  <span>🌦️</span>
                  <span>Current Weather: {city}</span>
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-black text-sm">
                  <div>
                    <p className="font-medium text-gray-600 text-xs">Temperature</p>
                    <p className="text-lg sm:text-xl font-bold">{currWeather?.temperature}°C</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-600 text-xs">Weather Code</p>
                    <p className="text-lg sm:text-xl font-bold">{currWeather?.weathercode}</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-600 text-xs">Wind Speed</p>
                    <p className="text-lg sm:text-xl font-bold">{currWeather?.windspeed} km/h</p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-600 text-xs">Wind Direction</p>
                    <p className="text-lg sm:text-xl font-bold">{currWeather?.winddirection}°</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10 text-center px-4">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
              Essential {destinationData.city}
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Pick a category to filter your recs
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

            <div className="flex gap-2 sm:gap-3 flex-wrap items-center justify-center mb-6 sm:mb-8">
              {destinationData.categories && destinationData.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-105
                  ${selectedCategory === category
                      ? 'border-black bg-black text-white font-bold'
                      : 'border-gray-400 text-gray-700 hover:border-gray-600'}`}>
                  <span>{category}</span>
                </button>
              ))}
            </div>

            <TopDestination />
            <TopPlacesToStay />
            <TopFoodAndDrink />

            <section className="mb-8 sm:mb-12">
              <MapComponent destination={destinationData.city} />
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;