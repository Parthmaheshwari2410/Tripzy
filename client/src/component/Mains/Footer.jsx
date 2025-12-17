import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets.js'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrency } from '../../Redux/Slices/currencySlice.js';

const Footer = () => {
  const dispatch = useDispatch()
  const [countryData, setCountryData] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState("")

  async function getUser() {
    try {
      const response = await axios.get(
        'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LdYp0YgN6eXb8TBybJczFVsMZVHUB52JNZ4HYpkp'
      );
      console.log(response.data)
      if (response.status === 200) {
        const currenciesArray = Object.keys(response.data.data).map(
          (code) => ({
            currencyCode: code
          })
        );

        setCountryData(currenciesArray);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8'>

        <div className='sm:col-span-2 lg:col-span-1'>
          <img
            src={assets.logo}
            alt="logo"
            className='mb-3 sm:mb-4 h-7 sm:h-8 md:h-9 opacity-80'
          />
          <p className='text-sm sm:text-base leading-relaxed'>
            Discover the world's most extraordinary places to stay, from boutique hotels to Restaurants and private islands.
          </p>

          <div className='flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5'>
            <a href="#" className='hover:opacity-70 transition-opacity' aria-label="Instagram">
              <img src={assets.instagramIcon} alt="instagram" className='w-5 sm:w-6 h-5 sm:h-6' />
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity' aria-label="Facebook">
              <img src={assets.facebookIcon} alt="facebook" className='w-5 sm:w-6 h-5 sm:h-6' />
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity' aria-label="Twitter">
              <img src={assets.twitterIcon} alt="twitter" className='w-5 sm:w-6 h-5 sm:h-6' />
            </a>
            <a href="#" className='hover:opacity-70 transition-opacity' aria-label="LinkedIn">
              <img src={assets.linkendinIcon} alt="linkedin" className='w-5 sm:w-6 h-5 sm:h-6' />
            </a>
          </div>
        </div>

        <div>
          <p className='font-playfair text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 font-medium'>
            COMPANY
          </p>
          <ul className='flex flex-col gap-2 sm:gap-2.5 text-sm sm:text-base'>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                About
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Careers
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Press
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className='font-playfair text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 font-medium'>
            SUPPORT
          </p>
          <ul className='flex flex-col gap-2 sm:gap-2.5 text-sm sm:text-base'>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className='hover:text-gray-700 transition-colors inline-block'>
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div className='sm:col-span-2 lg:col-span-1'>
          <label
            htmlFor="currency"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3"
          >
            Select Currency
          </label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => {
              setSelectedCurrency(e.target.value)
              dispatch(setCurrency(e.target.value))
            }}
            className="block w-full sm:max-w-xs lg:max-w-full rounded-lg border border-gray-300 bg-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">Select currency</option>
            {countryData?.map((currency) => (
              <option key={currency.currencyCode} value={currency.currencyCode}>
                {currency.name} ({currency.currencyCode})
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr className='border-gray-300 mt-8 sm:mt-10 md:mt-12' />

      <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between py-5 sm:py-6 text-xs sm:text-sm'>
        <p className='text-center sm:text-left'>
          © {new Date().getFullYear()} Tripzy. All rights reserved.
        </p>

        <ul className='flex items-center gap-4 sm:gap-6 flex-wrap justify-center'>
          <li>
            <a href="#" className='hover:text-gray-700 transition-colors'>
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-gray-700 transition-colors'>
              Terms
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-gray-700 transition-colors'>
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer