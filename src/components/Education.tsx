import React from "react";
import { createId } from "../helpers";
import { IEducation } from "../model";
import "../assets/education.css";

interface IEducationProps {
  educations: IEducation[];
}
export const Education: React.FC<IEducationProps> = ({ educations }) => {
  return (
    <div className="education">
      {educations.map((e) => {
        const { name, location, level, startYear, endYear } = e;

        return (
          <React.Fragment key={createId([name])}>
            <span className="schoolName">{name}</span>
            <span>{location}</span>
            <span className="schoolLevel">{level}</span>
            <span>{startYear ? `${startYear} - ${endYear}` : endYear}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};
