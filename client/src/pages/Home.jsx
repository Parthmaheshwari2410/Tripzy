import React from 'react'

import Hero from '../component/Mains/Hero.jsx'

import Testimonial from '../component/Mains/Testimonial.jsx'
import TopRestaurents from '../component/restarents/TopRestaurents.jsx'
import TopHotels from '../component/Hotels/TopHotels.jsx'
import ExclusiveOffers from '../component/Mains/ExclusiveOffers.jsx'
import Topplace from '../component/Flights/Topplace.jsx'


const Home = () => {
  return (
    <>
      <Hero />
      <Topplace />
      <TopHotels />
      <TopRestaurents />
      <ExclusiveOffers />
      <Testimonial />


    </>
  )
}

export default Home