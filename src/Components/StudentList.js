import React from "react";
import { FaPen } from "react-icons/fa";
import { HiCube } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import InterviewScores from "./InterviewScores";
import StudentFullDetail from "./StudentFullDetail";
import { useNavigate,NavLink } from "react-router-dom";
import { useState } from "react";

function StudentList() {

  
  let buttonslist=[{
    icon:<HiCube/>,
    name: "TO REVIEW",
    link:"/"
},
{
    name: "SHORTLISTED",
    icon:<FaCopy/>,
    link:"/shortlisted"
},

]

const [activeTab, setActiveTab] = useState('TO REVIEW');
const navigate = useNavigate();
 
return (
    <div className="total-container">
      <div className="saleslist">
        <div className="same sametop">
          <h4>Sales BDE</h4>
          <div>
            <h4 className="green">Active</h4>
            <div className="penbox">
              <FaPen className="pen" />
            </div>
          </div>
        </div>

        <div className="same">
          <p>Assignment Link</p>
          <p>jufuufuufuufufu</p>
        </div>

        <div className="same">
          <p>Assignment Hours</p>
          <p>3 hours</p>
        </div>

        <div className="same">
          <p>Assignment End at</p>
          <p>3 May 2024</p>
        </div>

         

        <div className="btn">
        {buttonslist.map((list)=>(
           <button className='activebtn'><NavLink exact to={list.link} className={window.location.pathname === list.link ? 'active' : 'btnnn'}>{list.icon}{list.name}</NavLink></button>
            
        ))}

        </div>
        {/* <InterviewScores /> */}
      </div>

    
    </div>
  );
}

export default StudentList;
