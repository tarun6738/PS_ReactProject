import React, { useState } from 'react';
import './homebody.css';
function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImpg8SjV67wNeHy9U2Cs159ec8SZS36TFTmGb6pAp&s',
      html: '<h1 className="text-xl">Topic Name: Robotics</h1><p>University: KMIT</p>'
    },
    {
      image: 'https://dc-us.resource.bosch.com/media/general_use/industries_2/industries_min_1/small_height_1/metallurgy_w734.jpg',
      html: '<h1>Topic Name: Metallurgy</h1><p>University: KMEC</p>'
    },
    {
      image: 'http://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/',
      html: '<h1>Topic Name: Chemistry</h1><p>University: KMIT</p>'
    },
  ];

  function handlePrevious() {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? slides.length - 1 : newIndex);
  }

  function handleNext() {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === slides.length ? 0 : newIndex);
  }

  return (
    <div className="">
      <img
        src={slides[currentIndex].image}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="flex text-xl justify-between mt-3"
      dangerouslySetInnerHTML={{ __html: slides[currentIndex].html}}>
        
      </div>
      <div className="flex items-center justify-center ">
      <button className="bg-orange-700  rounded-lg p-1">Read More</button>
      </div>

      <button
        className="absolute left-0 top-0 p-2 rounded-lg bg-orange-800 hover:text-white m-8"
        onClick={handlePrevious}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-0 p-2 rounded-lg bg-orange-800 hover:text-white m-9"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default ImageSlider;



