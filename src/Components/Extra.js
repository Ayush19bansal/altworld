import React from 'react'

function Extra() {
  return (
    <div className='videoandprofile'>
    <div className="profile-card">
  <div className="profile-header">
    <img src="https://ayush-portfolio-six.vercel.app/images/AyushAi.png" />
    <div className="profile-info">
     <div> <h3>Ayush Bansal</h3>
      <p className='email'>Bansalaashu7@gmail.com</p></div>
      <p className="marksss" style={{
              color:  "green" ,
            }}>90%</p>
    </div>
  </div>
  <div className="progress-bars">
    <div className="progress-bar">
      <span>Behavioural</span>
      <div className='PB'>
      <div style={{ width: `90%`, backgroundColor: "green", height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
      </div>
      <p style={{fontWeight:"600" , color: "green"}}>9/10</p>
    </div>
    <div className="progress-bar">
      <span>Communication</span>
      <div className='PB'>
      <div style={{ width: `90%`, backgroundColor: "green", height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
      </div>
      <p style={{fontWeight:"600" , color: "green" }}>9/10</p>
      
    </div>
    <div className="progress-bar">
      <span>Situation handling</span>
      <div className='PB'>
      <div style={{ width: `90%`, backgroundColor: "green" , height: '100%', transition: 'width 0.5s ease', borderRadius: "5px" }}></div>
      </div>

      <p style={{fontWeight:"600" , color: "green" }}>9/10</p>
     
    </div>
  </div>
  <div className="profile-details">
    <h4>About</h4>
    <p>I am Ayush Bansal, a dedicated and adaptable individual, constantly seeking new challenges to conquer. Driven by a passion for continuous learning, I am committed to delivering excellence in all endeavors. With an optimistic outlook and a mindset geared towards growth.</p>
    <h4>Experience</h4>
    <p>As an aspiring professional in the field of web development. I bring to the table a fervent enthusiasm and creative flair, specializing in frontend development.</p>
    <h4>Hobbies</h4>
    <p>Play Cricket , Travelling</p>


    <h4>Introduction</h4>
    <p>Hello, I'm Ayush Bansal. It's a pleasure to meet you. With a foundation rooted in Government Engineering College Ajmer ,where I graduated in 2022, I embarked on a journey fueled by curiosity and a passion for development.</p>
  </div>
  <button className="shortlist-btn">Shortlist <br/><span>(This is Dummy Please select from Review List)</span></button>
</div>

<div className='video'>
<img src="https://ayush-portfolio-six.vercel.app/images/AYUSH%20portfolio%20pic.jpg" />

{/* <ol>
  <h3>Question Asked</h3>
  {ctx.data.interview_questions && Object.values(ctx.data.interview_questions).map((question, index) => (
      <li key={index}>{question}</li>
  ))}
</ol> */}


</div>
</div>
  )
}

export default Extra
