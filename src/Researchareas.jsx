import React from "react";
import Header from "./Header";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
function Researchareas() {
  return(
    <React.Fragment>
        <Header/>
        <div className="">
            <h1 className="text-4xl text-orange-500 ml-4 mt-3 font-semibold font-sans">Research Areas</h1>
            <p className="text-xl ml-4 mt-3">Faculty members at KMIT carry out research in their areas of interests, often in collaboration with research scholars, doctoral scholars and other researchers. The Institute has ongoing research collaborations with several universities, governments and industries. The research expertise available at the Institute is organized below by department.</p>
        </div>
        <Dropdown/>
        <SearchBar/>
    </React.Fragment>
  );
}
export default Researchareas;