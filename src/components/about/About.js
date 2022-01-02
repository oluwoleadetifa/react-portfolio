import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who I Am</h2>
          <div className={classes.About}>
            <p>
              {" "}
              My name is ADETIFA OLUWOLE. I have a bachelor's of engineering
              degree in Electrical and electronics engineering from Covenant
              University. I am a frontend developer with further interests in
              artificial intelligence and cloud engineering.{" "}
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
