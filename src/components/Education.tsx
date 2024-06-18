import { createId } from "../helpers";
import { IEducation } from "../model";

interface IEducationProps {
  educations: IEducation[];
}
export const Education: React.FC<IEducationProps> = ({ educations }) => {
  return (
    <ul>
      {educations.map((e) => {
        const { name, location, level, startYear, endYear } = e;

        return (
          <li key={createId([name])} className="education">
            <span>{name}</span>
            <span>{location}</span>
            <span>{level}</span>
            <span>{`${startYear} - ${endYear}`}</span>
          </li>
        );
      })}
    </ul>
  );
};
