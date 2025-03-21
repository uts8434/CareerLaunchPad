import React, { useState } from "react";
import Header from "./component/Header";
import Opportunity from "./component/Opportunity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Course from "./component/Course";
import Feed from "./component/Feed";

function App() {
  const [activeFeed, setActiveFeed] = useState("all");
  const internships = [
    {
      domain: "React.js Internships",
      name: "React.js Intern at Adobe",
      ApplyLink: "#reactadobe",
    },
    {
      domain: "React.js Internships",
      name: "React.js Intern at Meta",
      ApplyLink: "#reactmeta",
    },
    {
      domain: "React.js Internships",
      name: "React.js Intern at Google",
      ApplyLink: "#reactgoogle",
    },
    {
      domain: "Software Development",
      name: "Software Developer at Adobe",
      ApplyLink: "#adobeSoftwaredeveloper",
    },
    {
      domain: "Software Development",
      name: "Full Stack Developer at Amazon",
      ApplyLink: "#fullstackamazon",
    },
    {
      domain: "Flutter Development",
      name: "Flutter Developer at Facebook",
      ApplyLink: "#facebookflutter",
    },
    {
      domain: "Flutter Development",
      name: "Flutter Developer at Twitter",
      ApplyLink: "#twitterflutter",
    },
    {
      domain: "AI & ML Internships",
      name: "AI Research Intern at OpenAI",
      ApplyLink: "#aiopenai",
    },
    {
      domain: "AI & ML Internships",
      name: "ML Engineer Intern at Tesla",
      ApplyLink: "#mltesla",
    },
    {
      domain: "AI & ML Internships",
      name: "AI Developer at Microsoft",
      ApplyLink: "#aimicrosoft",
    },
  ];
  const feedData = [
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "John Doe",
      postTime: "2h ago",
      description: "Enjoying the beautiful sunset today! 🌅",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF.png",
      username: "Jane Smith",
      postTime: "4h ago",
      description: "Had a great workout this morning! 🏋️‍♂️",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "Michael Brown",
      postTime: "1 day ago",
      description: "Just finished reading an amazing book! 📖",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "Alice Johnson",
      postTime: "3 days ago",
      description: "Loving this new recipe I tried! 🍲",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    ,
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "Alice Johnson",
      postTime: "3 days ago",
      description: "Loving this new recipe I tried! 🍲",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    ,
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "Alice Johnson",
      postTime: "3 days ago",
      description: "Loving this new recipe I tried! 🍲",
      postImage: "https://placehold.co/600x400?text=Hello+World",
    },
    ,
    {
      profileImage: "https://placehold.co/600x400/000000/FFFFFF/png",
      username: "Alice Johnson",
      postTime: "3 days ago",
      description: "Loving this new recipe I tried! 🍲",
      postImage: "https://source.unsplash.com/600x400/?food",
    },
  ];

  return (
    <>
      <Header />

      <div className="container-fluid text-center mt-3">
        <div className="row">
          <div className="col-md-3 border border-top-0">
            <h2
              className="py-2"
              style={{ backgroundColor: "#0961BA", color: "white" }}
            >
              OPPORTUNITY
            </h2>
            <Opportunity activeinternship={internships} />
          </div>

          <div className="col-md-6 border border-top-0">
            <div className="position-relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-secondary position-absolute"
                style={{
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                type="search"
                className="form-control rounded-4 ps-5 border"
                placeholder="Search"
                style={{
                  // outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>

            <div className="container-fluid w-75 mt-3 p-0  border ">
              <div className="d-flex w-100">
                <div
                  onClick={() => {
                    setActiveFeed("all");
                  }}
                  className="fw-bold border-end   text-center flex-grow-1 p-3 ${}"
                  style={{
                    backgroundColor: activeFeed === "all" ? "#0961BA" : "white",
                    color: activeFeed === "all" ? "white" : "black",
                  }}
                >
                  All Feed
                </div>
                <div
                  onClick={() => {
                    setActiveFeed("college");
                  }}
                  className="fw-bold border-end flex-grow-1 p-3"
                  style={{
                    backgroundColor:
                      activeFeed === "college" ? "#0961BA" : "white",
                    color: activeFeed === "college" ? "white" : "black",
                  }}
                >
                  Your College Feed
                </div>
                <div
                  onClick={() => {
                    setActiveFeed("latest");
                  }}
                  style={{
                    backgroundColor:
                      activeFeed === "latest" ? "#0961BA" : "white",
                    color: activeFeed === "latest" ? "white" : "black",
                  }}
                  className="fw-bold  flex-grow-1 p-3"
                >
                  Latest Feed
                </div>
              </div>
            </div>
            <div className="mt-4 ">
              {feedData.map((post, index) => (
                <Feed
                  key={index}
                  profileImage={post.profileImage}
                  username={post.username}
                  postTime={post.postTime}
                  description={post.description}
                  postImage={post.postImage}
                />
              ))}
            </div>
          </div>

          <div className="d-flex flex-column col-md-3 border border-top-0">
            <h2
              className="py-2"
              style={{ backgroundColor: "#0961BA", color: "white" }}
            >
              COURSES
            </h2>
            <div className="d-flex flex-column gap-4">
              <Course
                imageurl={
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                coursename={"Full-Stack Web Development Bootcamp"}
                discription={
                  "Become a job-ready Full-Stack Developer with this intensive bootcamp! Learn both front-end and back-end technologies, including"
                }
                advantage={[
                  "HTML, CSS, JavaScript (ES6+)",
                  " React.js & Next.js for modern UI development",
                  "Node.js & Express for back-end development",
                  " MongoDB & MySQL for database management",
                  " REST APIs & Authentication (JWT, OAuth)",
                  "Deploying apps on cloud platforms (Vercel, AWS, DigitalOcean)",
                ]}
              />
              <Course
                imageurl={
                  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                coursename={"Data Structures & Algorithms with Java"}
                discription={
                  "Master problem-solving with Data Structures and Algorithms (DSA) using Java! Ideal for coding interviews and competitive programming. Learn:"
                }
                advantage={[
                  "Arrays, Linked Lists, Stacks & Queues",
                  "Sorting & Searching Algorithms",
                  "Recursion, Backtracking & Dynamic Programming",
                  "Graph Theory & Tree-based Algorithms",
                  "Time & Space Complexity Analysis",
                  "Coding Interview Preparation (LeetCode, CodeChef, HackerRank",
                ]}
              />
              <Course
                imageurl={
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                coursename={"Python for Data Science & Machine Learning"}
                discription={
                  " Become a data scientist with hands-on Python programming! Learn how to analyze and visualize data, build ML models, and work with big data. Topics covered: "
                }
                advantage={[
                  "Python Basics & NumPy/Pandas for Data Manipulation",
                  "Data Visualization with Matplotlib & Seaborn",
                  "Machine Learning with Scikit-Learn",
                  " Deep Learning with TensorFlow & PyTorch",
                  " Big Data & Cloud Computing (AWS, GCP)",
                  "Hands-on Projects: Stock Prediction, Image Recognition, Chatbots",
                ]}
              />
              <Course
                imageurl={
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                coursename={"UI/UX Design with Figma & Adobe XD"}
                discription={
                  " Learn the art of designing beautiful and user-friendly interfaces with our UI/UX Design course! Perfect for aspiring designers and product managers. Topics include:"
                }
                advantage={[
                  "Design Thinking & User Research",
                  "Wireframing & Prototyping in Figma",
                  "Visual Design Principles & Typography",
                  "Interactive Prototypes with Adobe XD",
                  "User Testing & Feedback Implementation",
                  "Portfolio Project: Design a Real-World App",
                ]}
              />
              <Course
                imageurl={
                  "https://images.unsplash.com/photo-1669052700037-db884b37b2d9?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                coursename={"Cybersecurity & Ethical Hacking"}
                discription={
                  "Learn how to protect systems from cyber threats and perform ethical hacking tests! This course is designed for cybersecurity enthusiasts, covering:"
                }
                advantage={[
                  "Networking Basics & Linux for Cybersecurity",
                  " Ethical Hacking & Penetration Testing",
                  " Web Application Security & SQL Injection",
                  "Cryptography & Secure Communications",
                  " Incident Response & Threat Mitigation",
                  "Certified Ethical Hacker (CEH) Exam Preparation",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
