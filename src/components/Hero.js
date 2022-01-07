import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="hero__container">
        <div className="frame">
          <div className="center">
            <div className="hero_title">Hi, My Name is Nick</div>
            <div className="carousel">
              <div className="pre">I'm a </div>
              <div className="change_outer">
                <div className="change_inner">
                  <div className="element">Developer</div>
                  <div className="element">Skydiver</div>
                  <div className="element">Designer</div>
                  <div className="element">Powerlifter</div>
                  <div className="element">Astroaut</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
