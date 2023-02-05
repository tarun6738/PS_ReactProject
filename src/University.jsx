import React from "react";
import Header from "./Header";
import UnivImgSlider from "./UnivImgSlider";
import UniversityDropdown from "./UniversityDropdown";

import './Header.css';
function University(){
  return(
    <React.Fragment>
    <Header/>
      <div>
        <div className="text-4xl text-orange-500 ml-4 mt-3">Universities</div>
        <div className="mt-3 ml-4">Lorem ipsum dolor sit amet, consectetur adip</div>
      </div>
    <div className="ml-38 flex items-center">
    <img src={'https://i0.wp.com/nenow.in/wp-content/uploads/2021/04/iit-g.jpg?fit=1200%2C594&ssl=1'} className="w-46"></img>
    </div>
    <div className="flex justify-between w-69">
      <div className="ml-3 mt-8">
        <UniversityDropdown/>
      </div>
      <div>
        <button className="bg-orange-500 text-black-500 mt-12 p-3 rounded-lg m-igive">Add/Update</button>
      </div>
    </div>
    </React.Fragment>
  );
}
export default University;