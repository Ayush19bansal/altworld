import React from "react";
import { Getctx } from "./UserContext";

function ShortListedData() {
  const ctx = Getctx();

  console.log(ctx.shortlist);

  return (
    <div className="interview-scores">
      <h4>Interview Scores</h4>
      <div className="score-list">
        {ctx.shortlist &&
          ctx.shortlist.length > 0 &&
          ctx.shortlist.map((student, index) => (
            <div className="score-item" key={index}>
              <div className="candidate-info">
                <img src={student.image} alt="Candidate" />
                <div>
                  <p className="name">{student.name}</p>
                  <p>{student.email}</p>
                </div>
              </div>
              <div
                className="markss"
                style={{
                  color:
                    student.total_marks < 65 ? "#EEBB45" : "rgb(36,181,120)",
                }}
              >
                {student.total_marks}%
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShortListedData;
