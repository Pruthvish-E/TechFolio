import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
function ExperienceCard({ experience }) {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <div id="time_line_5cf90ca818f641" className="time_line-item  item_show">
      <div className="time_line-date_wrap">
        <div className="seofy_hexagon">
          <svg
            style={{ fill: " #7f5af0" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 177.4 197.4"
          >
            <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
          </svg>
        </div>
        <div className="seofy_hexagon">
          <svg
            style={{
              fill: " #7f5af0",
              filter: "drop-shadow(4px 5px 4px #7f5af022)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 177.4 197.4"
          >
            <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path>
          </svg>
        </div>

        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              scrollChange("experiences");
            }
          }}
        >
          <h4 className="time_line-date">{experience.experienceDuration}</h4>
        </VisibilitySensor>
      </div>
      <div className="time_line-content">
        <h5 className="time_line-title">{experience.experienceTitle}</h5>
        <div className="time_line-descr">{experience.experienceDesc}</div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
            Prominent Skills Used: 
              {experience.experienceTags.map((tag, i) => {
                return <span key={i}> {tag} </span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
