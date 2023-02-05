import React from 'react';
import './researchhigh.css';
const Researchhigh = ({imageSrc, heading, paragraph, buttonText}) => {
  return (
    <React.Fragment>
    <div className="mt-4 ml-3 w-change">
    <div className="">
      <img src={imageSrc} alt="" className=" object-cover w-69" />
      <div className="">
        <h2 className="text-xl font-medium mt-3">{heading}</h2>
        <p className="text-sm mt-2">{paragraph}</p>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">{buttonText}</button>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default Researchhigh;
