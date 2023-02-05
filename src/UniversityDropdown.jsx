import React, { useState } from 'react';


const UniversityDropdown = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");

  return (
    <div>
      <label className="block text-orange-500 font-medium mb-2 text-xl">Select University</label>
      <select
        className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg text-black leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        value={selectedUniversity}
        onChange={(e) => setSelectedUniversity(e.target.value)}
      >
        <option value="" disabled>Select University</option>
        <option value="KMIT">KMIT</option>
        <option value="NGIT">NGIT</option>
        <option value="KMEC">KMEC</option>
      </select>
    </div>
  );
};

export default UniversityDropdown;
