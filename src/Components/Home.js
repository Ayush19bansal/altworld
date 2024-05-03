import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
// import Main from './Main'
import ToReview from './ToReview'

function Home() {
  return (
    <div className='home'>
       <Navbar/>
       
       <div className='section'>
        <SideBar/>
        <ToReview/>
       </div>

      
      
    </div>
  )
}

export default Home
