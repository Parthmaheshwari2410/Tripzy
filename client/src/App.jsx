import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx';

import AllRooms from './pages/AllRooms.jsx';
import Navbar from './component/Mains/Navbar.jsx';
import Footer from './component/Mains/Footer.jsx';
import AllRestarents from './pages/AllRestarents.jsx';
import DestinationPage from './component/Destination/DestinationPage.jsx';
import Flights from './component/Flights/Flights.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import RestaurentDetails from './pages/RestaurentDetails.jsx';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className='min-h-screen flex flex-col'>
      {!isOwnerPath && <Navbar />}

      <div className='flex-1 min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/restarents/:id' element={<RestaurentDetails />} />
          <Route path='/restarents' element={<AllRestarents />} />
          <Route path='/destinations' element={<DestinationPage />} />
          <Route path='/flights' element={<Flights />} />
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App