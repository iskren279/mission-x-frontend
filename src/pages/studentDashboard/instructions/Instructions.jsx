import React from "react";
import "./Instructions.css";

export default function Instructions() {
  const menuItems = [
    "Learning Objectives",
    "Instructions",
    "Video Tutorial",
    "Make Project",
    "Submit Project",
    "Bonus Challenge",
    "Take the Quiz",
  ];

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        {/* TOP LOGO SECTION */}
        <div className="sidebar-logo">
          <div className="logo-circle">MX</div>
          <h3 className="logo-text">MISSION X</h3>
        </div>

        {/* NAV ITEMS */}
        <div className="menu">
          {menuItems.map((item) => (
            <button key={item} className="nav-item">
              {item}
            </button>
          ))}
        </div>

        {/* FOOTER (with icons) */}
        <div className="sidebar-footer">
          <div className="footer-item">
            <span className="icon">👤</span>
            <span>Profile</span>
          </div>

          <div className="footer-item">
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </div>

          <div className="footer-item logout">
            <span className="icon">🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <div className="card">
          <h1>1. JOIN SCRATCH</h1>

          <p>
            If you haven't used Scratch before, you will need to join Scratch
            first.
          </p>

          <p>
            Go to <b>scratch.mit.edu</b> and click <b>Join Scratch</b>.
          </p>

          <img
            src="https://scratch.mit.edu/images/scratch-og.png"
            className="img"
            alt="Scratch"
          />

          <p>Follow the instructions to complete signup.</p>
        </div>
      </main>
    </div>
  );
}
