import React, { useState } from 'react';
import UniversityDropdown from './UniversityDropdown';
import './Header.css';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="bg-black text-white p-6 rounded-lg w-400">
      <h1 className="text-2xl font-medium mb-2 text-center text-orange-500">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-200 font-medium mb-2 text-orange-500">
            Name
          </label>
          <input
            className="border border-orange-500 p-2 rounded-lg w-full text-gray-200"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <UniversityDropdown/>
        <div className="mb-4">
          <label className="block text-gray-200 font-medium mb-2 mt-2 text-orange-500">
            Query
          </label>
          <textarea
            className="border border-orange-500 p-2 rounded-lg w-full text-gray-200"
            rows="4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
