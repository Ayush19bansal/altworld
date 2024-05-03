import React from 'react'
import StudentList from './StudentList'
import InterviewScores from './InterviewScores'
import StudentFullDetail from './StudentFullDetail'

function ToReview() {
  return (
    <div className='toreview'>
      <div className='first'>
        <StudentList/>
        <InterviewScores/>
      </div>

      <StudentFullDetail/>
    </div>
  )
}

export default ToReview
