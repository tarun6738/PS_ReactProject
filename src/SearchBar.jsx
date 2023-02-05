import React, { useState } from 'react';
import './Header.css';
import Sortbydrop from './Sortbydrop';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  }

  return (
    <div className="flex ">
      
      <h3 className="text-xl mt-9 ml-3 text-orange-500">Search:</h3>
      <form onSubmit={handleSubmit} className="flex ml-3 mt-8">
        <input 
          type="text" 
          placeholder="Search for topic (Ex: Cancer)"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          className="text-black-500 rounded-l-md p-2 w-3/4"
        />
        <button 
          type="submit"
          className="bg-orange-600 text-black-500 font-semibold p-2 rounded-r-md "
        >
          Search
        </button>
      </form>
      
      <div>
      <Sortbydrop/>
      </div>
    </div>
  );
}

export default SearchBar;
