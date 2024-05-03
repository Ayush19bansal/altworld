import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Shortlisted from './Shortlisted'

function Main() {
  return (
    <div className='home'>
       <Navbar/>
       
       <div className='section'>
        <SideBar/>
        <Shortlisted/>
       </div>

      
      
    </div>
  )
}

export default Main
