import React from "react";

function Course({ imageurl, coursename, discription,advantage }) {
  return (
    <div className="mt-5">
      <div className="card"> {/* Added margin */}
        <img src={imageurl} className="card-img-top" alt={coursename} />
        <div className="card-body">
          <h5 className="card-title">{coursename}</h5>
          <p className="card-text">{discription}</p>
          {advantage && advantage.length > 0 && (
            <ul className="list-unstyled text-start overflow-hidden">
              {advantage.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          )}
          <a href="#" className="btn btn-primary">Enroll now</a>
        </div>
      </div>
    </div>
  );
}

export default Course;
