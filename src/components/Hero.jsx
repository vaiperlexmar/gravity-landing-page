import React from "react";
import PrimaryButton from "./utility/PrimaryButton";
import HeroPlaceholder from "../assets/HeroPlaceholder.png";
import HeroVideoPlaceholder from "../assets/HeroVideoPlaceholder.png";
import ProgressBar from "./utility/ProgressBar";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__textbox">
        <h1 className="heading-primary">Work around you and your team</h1>
        <p className="paragraph">
          From ads that dance or sing to MTV-like commercials,
          <br /> online advertisers are now using a new type of <br />
          technology “rich media” to attract consumers.
        </p>
        <PrimaryButton className="btn btn_blue" text="GET STARTED" link="#" />
        <ProgressBar bgcolor={"#c6b393"} />
      </div>
      <div className="hero__imagebox">
        <img className="hero__img" src={HeroPlaceholder} />
        <div className="hero__videoplaceholder">
          <img className="hero__video" src={HeroVideoPlaceholder}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
