import React from "react";
// import './InterviewScores.css';
import studentsData from "./studentsData";
import {Getctx} from "./UserContext"

const InterviewScores = () => {
    const ctx=Getctx();
  const students = studentsData.students;

  function userfulldata(student) {
    ctx.setdata(student);
    console.log(student.name);
  }

  return (
    <div className="interview-scores">
      <h4>Interview Scores</h4>
      <div className="score-list">
        {students.map((student, index) => (
          <div className="score-item" key={index} onClick={()=>userfulldata(student)}>
            <div className="candidate-info">
              <img src={student.image} alt="Candidate" />
              <div>
                <p className="name">{student.name}</p>
                <p>{student.email}</p>
              </div>
            </div>
            <div className="markss"
              style={{
                color: student.total_marks < 65 ? "#EEBB45" : "rgb(36,181,120)",
              }}
            >
              {student.total_marks}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewScores;
