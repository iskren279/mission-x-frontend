import { useState } from "react";

export default function PrevState() {
  const [selectedDays, setSelectedDays] = useState({
    "True-False": false,
    "Multiple-choice": false,
    "Open-book": false,
  });

  function handleCheckboxes(e) {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [e.target.value]: e.target.checked,
    }));
  }

  console.log(selectedDays);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1>PrevState Example</h1>

      <div>
        <input
          type="checkbox"
          value="True-False"
          id="True-False"
          onChange={handleCheckboxes}
        />
        <label htmlFor="True-False">True or False quiz</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Multiple-choice"
          id="Multiple-choice"
          onChange={handleCheckboxes}
        />
        <label htmlFor="Multiple-choice">Multiple choice quiz</label>
      </div>

      <div>
        <input
          type="checkbox"
          value="Open-book"
          id="Open-book"
          onChange={handleCheckboxes}
        />
        <label htmlFor="Open-book">Open book quiz</label>
      </div>
    </div>
  );
}
