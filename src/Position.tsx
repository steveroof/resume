import { IJob } from "./assets/data";

export const Position: React.FC<IJob> = ({
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
