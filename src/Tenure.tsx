import { Job } from "./Job";
import { ITenure } from "./data";

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
        <Job key={index} {...j} />
      ))}
    </>
  );
};
