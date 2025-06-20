import React, { useState } from 'react';
import { Search, Plane, Clock, Users, Calendar, MapPin, Star, ArrowRight } from 'lucide-react';


import TopRestaurents from '../restarents/TopRestaurents';
import { allData, assets, popularAirlines } from '../../assets/assets';
import TopHotels from '../Hotels/TopHotels';


const FlightSearchPage = () => {
  const [searchDestination, setSearchDestination] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState('roundTrip');




  const handleFormSearch = () => {
    const results = allData.filter(flight => 
     (flight.toCity && flight.toCity.toLowerCase().includes(toCity.toLowerCase())) ||
     (flight.to && flight.to.toLowerCase().includes(toCity.toLowerCase()))
    );
    
    setSearchResults(results);
    setIsSearched(true);
    setSearchDestination(toCity);
  };

 

  const directFlights = allData.filter(flight => flight.isDirect);

  return (
    <div className="relative h-96">
       <img src={assets.flight2} alt="location-icon"  className="w-full h-75 object-cover"  />
     
      <div  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" >
      
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Plane className="w-8 h-8" />
              <h1 className="text-3xl font-bold">Tripzy</h1>
            </div>
          </div>
        
      

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find the best flight</h2>
              
              <div className="flex space-x-4 mb-6">
                <button 
                  onClick={() => setActiveTab('roundTrip')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'roundTrip' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Round Trip
                </button>
                <button 
                  onClick={() => setActiveTab('oneWay')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'oneWay' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  One-way
                </button>
                <button 
                  onClick={() => setActiveTab('multiCity')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'multiCity' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Multi-city
                </button>
              </div>

        
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="From ..."
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="To ..."
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1 passenger</option>
                    <option value="2">2 passengers</option>
                    <option value="3">3 passengers</option>
                    <option value="4">4+ passengers</option>
                  </select>
                </div>
              </div>

          
              <div className="flex items-center space-x-6 mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Prefer nonstop</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Include nearby airports</span>
                </label>
              </div>

              <button
                onClick={handleFormSearch}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Find flights
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          
            </div>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4 py-8">
        {!isSearched && (
          <>
         
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Great deals to Goa</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {directFlights.slice(0, 6).map((flight) => (
                  <div key={flight._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">
                            {flight.fromCity}, IN ({flight.from}) → {flight.toCity}, IN ({flight.to})
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {flight.departure} - {flight.arrival} • {flight.airline} • {flight.type} • {flight.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-500">₹{flight.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">per person</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {flight.duration}
                          </span>
                          <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-medium">
                            {flight.airline}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        


            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Direct flights to Goa</h2>
              <p className="text-gray-600 mb-8">Non-stop flights for the quickest journey to your destination</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {directFlights.map((flight) => (
                  <div key={flight._id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {flight.from}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {flight.to}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-orange-500">₹{flight.price.toLocaleString()}</div>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-gray-800 mb-2">
                        {flight.fromCity} → {flight.toCity}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Airline:</span>
                          <span className="font-medium text-cyan-600">{flight.airline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{flight.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Aircraft:</span>
                          <span className="font-medium">{flight.aircraft}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            Direct Flight
                          </span>
                          <span className="text-sm text-gray-500">{flight.departure} - {flight.arrival}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular airlines flying to Goa</h2>
              <p className="text-gray-600 mb-8">What Tripadvisor travellers are saying about top airlines flying to your destination</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularAirlines.map((airline) => (
                  <div key={airline._id} className={`bg-gradient-to-br ${airline.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-white`}>
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{airline.logo}</div>
                        <h3 className="text-xl font-bold">{airline.name}</h3>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(airline.rating) ? 'text-yellow-300 fill-current' : 'text-white/30'}`} />
                          ))}
                          <span className="ml-2 font-semibold">{airline.rating}</span>
                        </div>
                        <p className="text-sm text-white/80">({airline.reviews.toLocaleString()} reviews)</p>
                      </div>
                      
                      <p className="text-sm text-white/90 text-center mb-4">
                        {airline.description}
                      </p>
                      
                      <div className="text-center">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                          {airline.routes}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

 
        {isSearched && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {searchResults.length > 0 ? `Great deals to ${searchDestination}` : 'No flights found'}
              </h2>
              <p className="text-gray-600">
                {searchResults.length > 0 
                  ? `We've searched 100s of deals recently found by travellers.*`
                  : `No flights found for "${searchDestination}". Try searching for another destination.`
                }
              </p>
            </div>

         
            <div className="space-y-4">
              {searchResults.map((flight) => (
                <div key={flight._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                   
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800">{flight.from}</div>
                          <div className="text-sm text-gray-500">{flight.fromCity}</div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-cyan-600">
                          <div className="w-8 h-px bg-cyan-600"></div>
                          <Plane className="w-5 h-5" />
                          <div className="w-8 h-px bg-cyan-600"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800">{flight.to}</div>
                          <div className="text-sm text-gray-500">{flight.toCity}</div>
                        </div>
                      </div>
                      
                
                      <div className="text-right">

                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-cyan-600">{flight.airline}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {flight.duration}
                          </span>
                          <span>{flight.type}</span>
                          <span>{flight.category}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span>{flight.departure} - {flight.arrival}</span>
                          <span>{flight.aircraft}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {searchResults.length > 0 && (
              <div className="mt-8 text-sm text-gray-500">
                <p>Prices are based on round trip travel with returns between 1-21 days after departure.</p>
              </div>
            )}
          </>
        )}
      </div>

<TopHotels/>
<TopRestaurents/>

    </div>
  );
};

export default FlightSearchPage;