import React from 'react'
import StudentList from './StudentList'
import InterviewScores from './InterviewScores'
import StudentFullDetail from './StudentFullDetail'
import ShortListedData from './ShortListedData'

function Shortlisted() {
  return (
    <div className='toreview'>
      <div className='first'>
        <StudentList/>
       <ShortListedData/>
      </div>

      <StudentFullDetail/>
    </div>
  )
}

export default Shortlisted
