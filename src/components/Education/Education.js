import React, { Component } from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2015-2021</span>
                          </h2>
                          <p>
                            I completed my higher education at covenant
                            university with a major in Electronics.{" "}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Internship <span>2016-2020</span>
                          </h2>
                          <p>
                            I completed a two month internship in web
                            development in 2015 using html, CSS Bootstrap, and
                            PHP at CS&C web consulting(now ehub) <hr />I did a
                            backend developer internship with Hotel.ng in 2020
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Work <span>2021-Date</span>
                          </h2>
                          <p>
                            Worked with Mul-t-lock Nigeria Ltd as a junior fullstack developer using Html, CSS,
                            Django, and Jquery. (February 2021 - July 2021)
                            <hr />
                            Worked as a Frontend developer at Mysogi nigeria limited, building web applications
                            using ReactJs. (January 2022 - August 2022)
                            <hr />
                            I am working as a software engineer at Hanspet technologies, building web and mobile application
                            UI using ReactJs and React Native. (December 2021 - Date)
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
