import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faBriefcase,
  faComments,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header className="bg-blue ">
        <nav
          className="navbar navbar-expand-lg px-3 shadow-sm"
          style={{
            backgroundColor: "#0961BA",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            width: "100%",
            zIndex: 1050, // Ensures navbar stays on top
          }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Brand Name */}
            <a className="navbar-brand text-white fw-bold fs-4" href="#">
              CareerLaunchPad
            </a>

            {/* Navbar Toggler for Mobile */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white"></span>
            </button>

            {/* Navbar Items */}
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav gap-4">
                {[
                  {
                    icon: faHome,
                    label: "Home",
                    message: "Navigating to Home Page!",
                  },
                  {
                    icon: faUserFriends,
                    label: "Network",
                    message: "Exploring your Network!",
                  },
                  {
                    icon: faComments,
                    label: "Messaging",
                    message: "Opening your Messages!",
                  },
                  {
                    icon: faBell,
                    label: "Notifications",
                    message: "Checking Notifications!",
                  },
                ].map(({ icon, label, message }, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link text-white d-flex flex-column align-items-center"
                      href="#"
                      style={{ transition: "0.3s", opacity: 0.8 }}
                      onClick={() => alert(message)}
                    >
                      <FontAwesomeIcon icon={icon} size="lg" />
                      <span className="small">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Icon */}
            <div
              className="p-1 rounded-circle bg-white d-flex justify-content-center align-items-center"
              style={{
                width: "45px",
                height: "45px",
                marginRight: "1em",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-primary"
                size="lg"
              />
            </div>
          </div>
        </nav>

        <div
          id="carouselExampleFade"
          className="carousel carousel-fade slide px-2  py-2"
          data-bs-ride="carousel"style={{marginTop:"5%"}}
        >
          <div className="carousel-inner rounded-4">
            <div className="active carousel-item">
              <img
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="Slide 1"
              />
              <div className="d-md-block d-none bg-dark bg-opacity-50 p-3 rounded carousel-caption">
                <h3>Welcome to Our Platform</h3>
                <p>
                  Find the best internships, startups, and courses in one place!
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <div className="container-fluid bg-light py-3">
        <div className="d-flex flex-wrap justify-content-center gap-3 py-2 text-center">
          <div
            className="btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0"
            style={{ backgroundColor: "#1565C0" }}
            onClick={() => {
              alert("Search  Internships");
            }}
          >
            Search Internships
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
  );
}

export default Header;
