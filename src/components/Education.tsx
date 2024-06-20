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
        const { name, location, level, yearsAttended } = e;

        return (
          <React.Fragment key={createId([name])}>
            <span className="schoolName">{name}</span>
            <span>{location}</span>
            <span>{level}</span>
            <span>{yearsAttended}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};
