import React, { useEffect } from "react";

import "./InfoSection.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function InfoSection() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="info__container">
        <div className="info__word__container">
          <div data-aos="zoom-in-down" className="info__text">
            <span>I</span>
            <span>am</span>
            <span>a</span>
            <span>Full</span>
            <span>Stack</span>
            <span>Software</span>
            <span>Engineer</span>
            <span>who</span>
            <span>loves</span>
            <span>to</span>
            <span>make</span>
            <span>beautiful</span>
            <span>and</span>
            <span>unique</span>
            <span>websites</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span> I am interested in leveraging technology to improve
            the quality of life in areas such as education, environment, health
            and wellness. My background in kinesiology has provided me with a
            strong foundation in problem solving skills with the ability to
            adapt solutions to fit client needs.
            <div className="info__text__two">
              {" "}
              When I am not coding or learning, I'm usually traveling playing
              new disc golf courses throughout California. I also like to
              skydive, hike and try out new resturants!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
