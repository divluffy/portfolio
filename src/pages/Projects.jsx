import React from "react";
import "../components/project.css";
import MyCodes from "../components/MyCodes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        <Slider {...settings}>
          {MyCodes.map((pro, i) => {
            return (
              <div className="card_4_cards">
                {pro.map((four, i) => {
                  return (
                    <div className="bowl_projects">
                      <div className="banar_projects">
                        <img src={four.banar} alt="" />
                      </div>
                      <div className="bowl_info_t_project">
                        <div className="line_prop">
                          <a target="_blank" href={four.demo} rel="noreferrer">
                            Demo
                          </a>
                        </div>
                        <div className="line_prop">
                          <a
                            target="_blank"
                            href={four.source}
                            rel="noreferrer"
                          >
                            Source code
                          </a>
                        </div>
                        <div className="line_prop">
                          <span>{four.tools}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
