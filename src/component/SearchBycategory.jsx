import React from 'react';
 import { useNavigate } from 'react-router-dom';
  
function SearchBycategory() {
    const navigate= useNavigate();
  return (
    <>
      <div className="container-fluid bg-light py-3">
        <div className="d-flex flex-wrap justify-content-center gap-3 py-2 text-center">
          <div
            className="btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0"
            style={{ backgroundColor: "#1565C0" }}
            onClick={() => {
                navigate("/Searchintern")
            }}
          >
            Search Interns
          </div>
          <div
            className="btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0"
            style={{ backgroundColor: "#2D8C43" }}
            onClick={() => {
              alert("Search Startups/Companies Clicked");
            }}
          >
            Search Startups/Companies
          </div>
          <div
            className="btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0"
            style={{ backgroundColor: "#E67E22" }}
            onClick={() => {
              alert("Search Courses Clicked");
            }}
          >
            Search Courses
          </div>
        </div>
      </div>
    
    </>
  )
}

export default SearchBycategory
