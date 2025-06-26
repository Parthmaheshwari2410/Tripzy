import React from 'react'

import Hero from '../component/Mains/Hero'

import Testimonial from '../component/Mains/Testimonial'
import TopRestaurents from '../component/restarents/TopRestaurents'
import TopHotels from '../component/Hotels/TopHotels'
import ExclusiveOffers from '../component/Mains/ExclusiveOffers'
import Topplace from '../component/Flights/Topplace'


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