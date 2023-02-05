import React, { useState } from 'react';
import './Header.css';
const researchFields = [
  "Computer Science",
  "Biology",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Engineering",
  "Medicine",
  "Psychology",
  "Sociology",
  "Environmental Science"
];

function Dropdown() {
  const [selectedField, setSelectedField] = useState("Select a field");

  function handleChange(event) {
    setSelectedField(event.target.value);
  }

  return (
    <div>
      <h3 className="text-3xl text-orange-500 mt-5 ml-3">Browse by Department</h3>
      <select value={selectedField} onChange={handleChange} className="text-black-500 mt-6 ml-4 p-2 rounded-lg">
        <option disabled className="">Select a field</option>
        {researchFields.map(field => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
