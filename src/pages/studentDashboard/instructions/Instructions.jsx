import React from "react";

export default function Instructions() {
  return (
    <div className="instructions-page">
      <div className="instructions-card">
        <h2>1. JOIN SCRATCH</h2>

        <p>
          <strong>Welcome to MissionX!</strong>
        </p>

        <p>
          If you haven't used Scratch before, you will need to join Scratch
          first.
        </p>

        <p>
          Go to scratch.mit.edu. Click on <strong>Join Scratch</strong>.
        </p>

        <img
          src="https://scratch.mit.edu/images/scratch-og.png"
          alt="Scratch"
          className="scratch-image"
        />

        <p>
          Follow the instructions to join. You will need a username and password
          that you will remember.
        </p>
      </div>
    </div>
  );
}
