import React from "react";
import './homebody.css';
import Whatsnewcard from "./Whatsnewcard";
import Researchhigh from "./Reasearchhigh";
import Header from "./Header";
function Homebody() {
  return (
    <React.Fragment>
    <Header/>
    <div>
    <div className="total_body flex">
      <div className="img-slides">
      <img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" className="mx-4 mt-3 w-32 h-32" ></img>
      </div>
      <div className="whats-new w-36 ml-2">
        <div className="whatsnew-heading text-orange-500 text-xl1">What's New</div>
        <Whatsnewcard/>
        
      </div>
    </div>
    </div>
    <div>
    <h2 className="text-2xl mt-3 text-orange-500 ml-3">Research Highlights</h2>
    <div className="flex">
    <Researchhigh imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xd0xLZIAcWt16rAjG1Wi5HPKXdDlMI29yQ&usqp=CAU" heading="Media and Communications" paragraph="Some quick example text to build on the card make up the bulk of the cards content" buttonText="View More" />
    <Researchhigh imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xd0xLZIAcWt16rAjG1Wi5HPKXdDlMI29yQ&usqp=CAU" heading="Media and Communications" paragraph="Some quick example text to build on the card make up the bulk of the cards content" buttonText="View More" />
    <Researchhigh imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xd0xLZIAcWt16rAjG1Wi5HPKXdDlMI29yQ&usqp=CAU" heading="Media and Communications" paragraph="Some quick example text to build on the card make up the bulk of the cards content" buttonText="View More" />
    <Researchhigh imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xd0xLZIAcWt16rAjG1Wi5HPKXdDlMI29yQ&usqp=CAU" heading="Media and Communications" paragraph="Some quick example text to build on the card make up the bulk of the cards content" buttonText="View More" />
    <Researchhigh imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xd0xLZIAcWt16rAjG1Wi5HPKXdDlMI29yQ&usqp=CAU" heading="Media and Communications" paragraph="Some quick example text to build on the card make up the bulk of the cards content" buttonText="View More" />  
    </div>
    </div>
    </React.Fragment>
               
  );
}
export default Homebody;
