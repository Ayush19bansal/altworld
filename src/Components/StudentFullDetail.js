import React, { useState } from 'react'
import { Getctx } from './UserContext'
// import Progress from 'react-progressbar';
import Extra from './Extra';

function StudentFullDetail() {
  const [ques,setques]=useState(false)
    const ctx = Getctx();
  
    function shorted(user){
      ctx.setshorlist([...ctx.shortlist,user]);
        // console.log(user);

    }

    function showques(){
      setques(!ques)
    }

  return (
 <div className='result'>
  {ctx.data.length==0 ? (<Extra/>): ( <div className='videoandprofile'>
      <div className="profile-card">
    <div className="profile-header">
      <img src={ctx.data.image} />
      <div className="profile-info">
       <div> <h3>{ctx.data.name}</h3>
        <p className='email'>{ctx.data.email}</p></div>
        <p className="marksss" style={{
                color: ctx.data.total_marks < 65 ? "#EEBB45" : "rgb(36,181,120)",
              }}>{ctx.data.total_marks}%</p>
      </div>
    </div>
    <div className="progress-bars">
      <div className="progress-bar">
        <span>Behavioural</span>
        <div className='PB'>
        <div style={{ width: `${ctx.data.behavior * 10}%`, backgroundColor: ctx.data.behavior > 6 ? "green" : "rgb(238,187,111)", height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
        </div>
        <p style={{fontWeight:"600" , color: ctx.data.behavior > 6 ? "green" : "rgb(238,187,111)"}}>{ctx.data.behavior}/10</p>
      </div>
      <div className="progress-bar">
        <span>Communication</span>
        <div className='PB'>
        <div style={{ width: `${ctx.data.communication * 10}%`, backgroundColor: ctx.data.communication > 6 ? "green" : "rgb(238,187,111)", height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
        </div>
        <p style={{fontWeight:"600" , color: ctx.data.communication > 6 ? "green" : "rgb(238,187,111)"}}>{ctx.data.communication}/10</p>
        
      </div>
      <div className="progress-bar">
        <span>Situation handling</span>
        <div className='PB'>
        <div style={{ width: `${ctx.data.situation_handling * 10}%`, backgroundColor: ctx.data.situation_handling > 6 ? "green" : "rgb(238,187,111)", height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
        </div>

        <p style={{fontWeight:"600" , color: ctx.data.situation_handling > 6 ? "green" : "rgb(238,187,111)"}}>{ctx.data.situation_handling}/10</p>
       
      </div>
    </div>
    <div className="profile-details">
      <h4>About</h4>
      <p>{ctx.data.about}</p>
      <h4>Experience</h4>
      <p>{ctx.data.experience}</p>
      <h4>Hobbies</h4>
      <p>{ctx.data.hobbies && ctx.data.hobbies.length > 0 ? ctx.data.hobbies.join(' , ') : ''}</p>


      <h4>Introduction</h4>
      <p>{ctx.data.introduction}</p>
    </div>
    <button className="shortlist-btn" onClick={()=>shorted(ctx.data)}>Shortlist</button>
  </div>

  <div className='video'>
  <img src={ctx.data.image} />

  <ol>
    <h3>Question Asked</h3>
    <button className='show' onClick={showques}>
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
  <span>Show Questions</span>
</button>

    { ques && ctx.data.interview_questions && Object.values(ctx.data.interview_questions).map((question, index) => (
        <li key={index}>{question}</li>
    ))}
</ol>


  </div>
  </div>) }
 </div>
  )
}

export default StudentFullDetail
