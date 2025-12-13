
import React, { useState } from 'react';
import { Plane, MapPin, Calendar, Users, Star } from 'lucide-react';
import TopHotels from '../Hotels/TopHotels.jsx';
import { useCity } from '../../context/CityContext.jsx';
import { allData, assets, popularAirlines } from '../../assets/assets.js';
import Topplace from './Topplace.jsx';

const FlightSearchPage = () => {
  const { selectedCity } = useCity();

  const [searchDestination, setSearchDestination] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState('roundTrip');

  const filteredFlights = selectedCity
    ? allData.filter((flight) =>
      flight.toCity?.toLowerCase() === selectedCity ||
      flight.city?.toLowerCase() === selectedCity
    )
    : allData;

  const directFlights = filteredFlights.filter(flight => flight.isDirect);

  const handleFormSearch = () => {
    const results = allData.filter(flight =>
      flight.toCity?.toLowerCase().includes(toCity.toLowerCase()) ||
      flight.to?.toLowerCase().includes(toCity.toLowerCase())
    );
    setSearchResults(results);
    setIsSearched(true);
    setSearchDestination(toCity);
  };

  return (
    <div className="relative min-h-screen">


      {filteredFlights.map((flight, index) => {
        if (!flight) {
          console.warn(`Flight at index ${index} is undefined`);
          return null;
        }
        return (
          <div key={flight._id ?? index}>
            {/* rest of the JSX */}
          </div>
        );
      })}


      {/* Header Image */}
      <div className="relative h-96">
        <img src={assets.flight2} alt="location-icon" className="w-full h-full object-cover" />
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-28 mx-auto max-w-5xl relative z-10 p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-3xl font-bold">
            <img src={assets.logo2} alt="" className="w-20 h-20" />

          </div>
        </div>

        <div className="flex space-x-4 mb-6 justify-center">
          {['roundTrip', 'oneWay', 'multiCity'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab
                ? 'bg-purple-700 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab === 'roundTrip' ? 'Round Trip' : tab === 'oneWay' ? 'One-way' : 'Multi-city'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="From ..."
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="To ..."
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            >
              {[1, 2, 3, 4].map(p => (
                <option key={p} value={p}>{p} passenger{p > 1 && 's'}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-6 mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Prefer nonstop</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Include nearby airports</span>
          </label>
        </div>

        <button
          onClick={handleFormSearch}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-lg font-bold text-lg"
        >
          Find flights
        </button>
      </div>

      <div className="container mx-auto px-4 py-12">
        {!isSearched && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Great deals to {selectedCity ? selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1) : 'your destination'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFlights.slice(0, 6).map(flight => (
                <div key={flight._id} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-lg">{flight.fromCity} → {flight.toCity}</h3>
                  <p className="text-gray-500 text-sm mt-1">{flight.airline} • {flight.departure} - {flight.arrival}</p>
                  <div className="mt-4 flex justify-between">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">₹{(flight.price ?? 0).toLocaleString()}</span>
                    <span className="text-sm">{flight.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Direct Flights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {directFlights.map(flight => (
                <div key={flight._id} className="bg-blue-50 rounded-xl shadow-md p-6">

                  <div className="flex items-center justify-between mb-2">

                    <div className="font-semibold">{flight.from} → {flight.to}</div>
                    <div className="text-xl font-bold text-orange-500">
                      ₹{typeof flight.price === 'number' ? flight.price.toLocaleString() : 'N/A'}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {flight.airline} • {flight.duration} • {flight.aircraft}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Popular Airlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {popularAirlines.map((airline) => (
                <div key={airline._id} className={`rounded-xl p-6 text-white bg-purple-700 shadow-md`}>
                  <div className="text-center mb-4">
                    <div className="text-4xl">{airline.logo}</div>
                    <h3 className="text-xl font-bold">{airline.name}</h3>
                  </div>
                  <div className="text-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 inline ${i < Math.floor(airline.rating) ? 'text-yellow-300' : 'text-white/30'}`} />
                    ))}
                    <div className="text-sm">{airline.reviews} reviews</div>
                  </div>
                  <p className="text-sm text-center">{airline.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {isSearched && (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {searchResults.length > 0
                ? `Great deals to ${searchDestination}`
                : `No flights found to "${searchDestination}"`}
            </h2>
            <div className="space-y-4">
              {searchResults.map(flight => (
                <div key={flight._id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <div className="font-bold">{flight.fromCity} → {flight.toCity}</div>
                      <div className="text-sm text-gray-600">{flight.departure} - {flight.arrival}</div>
                    </div>
                    <div className="text-xl font-bold text-orange-500">
                      ₹{typeof flight.price === 'number' ? flight.price.toLocaleString() : 'N/A'}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {flight.airline} • {flight.duration} • {flight.type} • {flight.category}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>


      <Topplace />
      <TopHotels />


    </div>
  );
};

export default FlightSearchPage;
