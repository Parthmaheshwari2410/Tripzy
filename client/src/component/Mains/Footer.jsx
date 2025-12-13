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
      const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/getCurrency', {
        headers: {
          'x-rapidapi-key': 'de3ef4f2bamsh7cf5e6cbe2ae02cp129d3ejsn5f1995097f8f',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      });

      if (response.status === 200) {
        setCountryData(response.data.data.minorCurrencies)
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser()
  }, [])


  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
          <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9  opacity-80' />
          <p className='text-sm'>
            Discover the world's most extraordinary places to stay, from boutique hotels to Restaurents and private islands.
          </p>
          <div className='flex items-center gap-3 mt-4'>

            <img src={assets.instagramIcon} alt="instagram-icon" className='w-6' />
            <img src={assets.facebookIcon} alt="facebookIcon-icon" className='w-6' />
            <img src={assets.twitterIcon} alt="twitter-icon" className='w-6' />
            <img src={assets.linkendinIcon} alt="linkendin-icon" className='w-6' />
          </div>
        </div>

        <div>
          <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div>
          <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className='max-w-80'>
          <div className="w-full max-w-xs mx-auto mt-8">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
              Select Currency
            </label>
            <select
              id="currency"
              value={selectedCurrency}
              onChange={(e) => {


                setSelectedCurrency(e.target.value)
                dispatch(setCurrency(e.target.value))
              }
              }
              className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">currency</option>
              {countryData?.map((currency) => (
                <option key={currency.currencyCode} value={currency.currencyCode}>
                  {currency.name} ({currency.currencyCode})
                </option>
              ))}
            </select>

          </div>
        </div>
      </div>
      <hr className='border-gray-300 mt-8' />
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Tripzy. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer