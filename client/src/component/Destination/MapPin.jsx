import { useState } from "react";

const MapPin = ({ className }) => (



  
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
  
);

const MapComponent = ({ destination }) => {
 

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-4 text-blue-600" />
          {destination} - Map Location
        </h3>
        
        <div className="mb-4">
           
            <div className=" h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex  border">
              <div className="text-center">
      
                   <iframe  className="inline-flex items-center px-4 py-2 transition-colors"
                        title={`Map of ${destination}`}
                        width="360%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`}
                     ></iframe>      

              </div>
            </div>
        
        </div>
    
        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Showing location for: <span className="font-semibold text-gray-800">{destination}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
