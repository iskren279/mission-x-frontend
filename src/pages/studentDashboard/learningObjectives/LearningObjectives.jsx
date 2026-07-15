import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import styles from "../../../components/LearningObject.module.css";
import DOMPurify from "dompurify";

export default function LearningObjectives() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects/1")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const imageStyle = {
    borderRadius: "30px",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      <div
        style={{
          display: "flex",

          minHeight: "calc(120px)",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "30px",
            backgroundColor: "#ffffff",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginBottom: "20px",
              color: "#7f5e5e",
            }}
          >
            Explore Scratch blocks <br />
          </h1>
          <h4
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginBottom: "20px",
              color: "#b17070",
            }}
          >
            Learn the basic function of some basic scratch blocks such as
            "say""wait""go to"
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <img
              src="/images/projects/Project01-obj1.png"
              alt="obj1"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <img
              src="/images/projects/Project01-obj2.png"
              alt="obj2"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
            />

            <img
              src="/images/projects/Project01-obj3.png"
              alt="obj3"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <img
              src="/images/projects/Project01-obj4.png"
              alt="obj4"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
            />

            <img
              src="/images/projects/Project01-obj5.png"
              alt="obj5"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <img
              src="/images/projects/Project01-obj6.png"
              alt="obj6"
              style={imageStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(.5)")
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
