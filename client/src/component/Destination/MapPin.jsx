import React, { useMemo } from 'react'

const MapPin = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
)

const MapComponent = ({ destination }) => {
  if (!destination) return null

  const mapUrl = useMemo(
    () =>
      `https://www.google.com/maps?q=${encodeURIComponent(
        destination
      )}&output=embed`,
    [destination]
  )

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 sm:mr-3 text-blue-600 flex-shrink-0" />
          <span className="line-clamp-1">
            {destination} – Map Location
          </span>
        </h3>

        <div className="mb-4">
          <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden border">
            <iframe
              className="w-full h-full"
              title={`Map of ${destination}`}
              src={mapUrl}
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-600">
            Showing location for:{' '}
            <span className="font-semibold text-gray-800">
              {destination}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MapComponent
