import React, { useEffect } from "react";

import "./InfoSection.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function InfoSection() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const string = `I am a Full-Stack Engineer who is eager to prove value within an established company. Motivated to build efficient and scalable products, focusing on enhancing user experiences. I enjoy working with cross functional teams adapting my skill set to provide support the team needs in order to succeed. My background in kinesiology has provided me with a strong foundation in problem solving skills with the ability to adapt solutions to fit clients needs.`;

  const string2 = `When I am not coding or learning, I'm usually traveling playing
  new disc golf courses throughout California. I also like to
  skydive, hike and try out new resturants!`;

  const stringParts = string.split(" ");
  const stringPartstwo = string2.split(" ");

  const wrappedLetters = stringParts.map((stringletters, index) => {
    return <span>{stringletters}</span>;
  });
  const wrappedLetterstwo = stringPartstwo.map((stringletterstwo, index) => {
    return <span>{stringletterstwo}</span>;
  });

  return (
    <>
      <div className="info__container">
        <div className="info__word__container">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className="info__text"
          >
            {wrappedLetters}
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className="info__text__two"
          >
            {wrappedLetterstwo}
          </div>
        </div>
      </div>
      <div className="iconContainer"></div>
    </>
  );
}

export default InfoSection;
