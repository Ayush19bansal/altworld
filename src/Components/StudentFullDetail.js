import React from 'react'
import { Getctx } from './UserContext'
import Progress from 'react-progressbar';
import Extra from './Extra';

function StudentFullDetail() {
    const ctx = Getctx();
  
    function shorted(user){
      ctx.setshorlist([...ctx.shortlist,user]);
        // console.log(user);

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

  {/* <ol>
    <h3>Question Asked</h3>
    {ctx.data.interview_questions && Object.values(ctx.data.interview_questions).map((question, index) => (
        <li key={index}>{question}</li>
    ))}
</ol> */}


  </div>
  </div>) }
 </div>
  )
}

export default StudentFullDetail
