import { Position } from "./Position";
import { ITenure } from "./assets/data";

export const Tenure: React.FC<ITenure> = ({
  companyName,
  location,
  locationType,
  jobs,
}) => {
  return (
    <>
      <h2>{companyName}</h2>
      <span>{location}</span>
      <span>{locationType}</span>
      {jobs.map((j, index) => (
        <Position key={index} {...j} />
      ))}
    </>
  );
};
