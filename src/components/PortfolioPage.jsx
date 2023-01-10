import React from "react";
import "./PortfolioPage.css";
import Featured from "./Featured";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    backgroundColor: "white",
    header: "Welcome to Tribal-iii Portfolio Project",
    paragraph:
      "Experience the many visual portfolios of our amazing visual artists... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veniam deleniti consequatur debitis quam delectus totam, quaeratmolestiae porro ex nesciunt inventore explicabo? Ipsam minus, laudantium quam libero commodi excepturi?",
  },
  {
    backgroundColor: "#E9E5E3",
    header: "Welcome to Tribal-iii Portfolio Project",
    paragraph:
      "Experience the many visual portfolios of our amazing visual artists... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veniam deleniti consequatur debitis quam delectus totam, quaeratmolestiae porro ex nesciunt inventore explicabo? Ipsam minus, laudantium quam libero commodi excepturi?",
  },
  {
    backgroundColor: "#ACBFD0",
    header: "Welcome to Tribal-iii Portfolio Project",
    paragraph:
      "Experience the many visual portfolios of our amazing visual artists... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veniam deleniti consequatur debitis quam delectus totam, quaeratmolestiae porro ex nesciunt inventore explicabo? Ipsam minus, laudantium quam libero commodi excepturi?",
  },
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  arrowsClass: "arrows",
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`Slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const PortfolioPage = () => {
  return (
    <div>
      <div className="slide-container">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="p-5 hero-section flex flex-col justify-center"
                style={{ backgroundColor: `${slideImage.backgroundColor}` }}
              >
                {/* <h1 className="p-4 text-5xl">{slideImage.header}</h1>
                <p className="p-4 text-lg">{slideImage.paragraph}</p> */}
              </div>
            </div>
          ))}
        </Slide>
        <div className="main-text">
          <h1 className="p-4 text-5xl">Welcome to Tribal-iii Portfolio Project</h1>
          <p className="p-4 text-lg">Experience the many visual portfolios of our amazing visual artists... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veniam deleniti consequatur debitis quam delectus totam, quaeratmolestiae porro ex nesciunt inventore explicabo? Ipsam minus, laudantium quam libero commodi excepturi?</p>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default PortfolioPage;
