import { IJob } from "./data";

export const Job: React.FC<IJob> = ({
  title,
  startDate,
  endDate,
  experiences,
}) => {
  return (
    <>
      <h3>{title}</h3>
      {/* todo: add duration */}
      <span>{`${startDate} - ${endDate}`}</span>
      <ul>
        {experiences.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </>
  );
};
