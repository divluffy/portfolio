import React from "react";
import MyCodes from "../components/MyCodes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projects() {
  return (
    <div>
      <div className="bowl_title_projects">
        <div className="theam1_nametitle_project">
          <div className="ch1">
            <span>Projects</span>
          </div>
          <div className="ch2"></div>
          <div className="ch3"></div>
          <div className="ch7"></div>
          <div className="ch8"></div>
        </div>
      </div>

      <div className="bowl_slider_project">
        <div className="content_Bowl_slider">
          {MyCodes.map((pro, i) => {
            return (
              <div className="bowl_projects">
                <div className="banar_projects">
                  <img src={pro.banar} alt="" />
                </div>
                <div className="bowl_info_t_project">
                  <div className="line_prop">
                    <span>{pro.name}</span>
                  </div>
                  <div className="line_prop">
                    <a target="_blank" href={pro.demo} rel="noreferrer">
                      Demo
                    </a>
                  </div>
                  <div className="line_prop">
                    <a target="_blank" href={pro.source} rel="noreferrer">
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
