import { IEducation } from "./model";

export const Education: React.FC<IEducation> = ({
  name,
  location,
  level,
  startYear,
  endYear,
}) => {
  return (
    <div>
      <span>{name}</span>
      <span>{location}</span>
      <span>{level}</span>
      <span>{`${startYear} - ${endYear}`}</span>
    </div>
  );
};
