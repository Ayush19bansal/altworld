import React from 'react'
import { IoHome } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='dashboard'>
        <IoHome className='icon'/>
        <h5>Dashboard</h5>
      </div>

      <div className='box'>
        <div className='plus'>
            <LuPlus className='p'/>
        </div>
        <div className='box-cont'>
            <h4>New Assignment?</h4>
            <p>Select from pre-defined questions to have a quick turnaround.</p>
        </div>

        <button>Create New Assignment</button>
      </div>
    </div>
  )
}

export default SideBar
