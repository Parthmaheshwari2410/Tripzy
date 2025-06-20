import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';

import AllRooms from './pages/AllRooms';
import Navbar from './component/Mains/Navbar';
import Footer from './component/Mains/Footer';
import AllRestarents from './pages/AllRestarents';
import DestinationPage from './component/Destination/DestinationPage';
import Flights from './component/Flights/Flights';


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    {!isOwnerPath &&  <Navbar/>}
      <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/restarents'element={<AllRestarents/>}/>
     <Route path='/destinations' element={<DestinationPage/>} />
       <Route path='/flights'element={<Flights/>}/>
       
       </Routes> 
      </div>  
      <Footer/>
    </div>
  )
}

export default App