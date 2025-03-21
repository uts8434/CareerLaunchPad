import React from "react";

function Opportunity({ activeinternship = [] }) {
  // Group internships by domain
  const groupedInternships = activeinternship.reduce((acc, internship) => {
    if (!acc[internship.domain]) {
      acc[internship.domain] = [];
    }
    acc[internship.domain].push({ name: internship.name, ApplyLink: internship.ApplyLink });
    return acc;
  }, {});

  return (
    <div className="my-5">
      {Object.entries(groupedInternships).map(([domain, internships], index) => (
        <div key={index} className="text-center border mb-2">
          <h5 className="text-white p-1" style={{ backgroundColor: "#0961BA" }}>
            {domain}
          </h5>
          <ul className="list-unstyled text-start ms-5">
            {internships.map((internship, idx) => (
              <li key={idx}>
                <a href={internship.ApplyLink} target="_blank" rel="noopener noreferrer">
                  {internship.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Opportunity;
