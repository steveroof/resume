import { IPosition } from "./model";

export const Position: React.FC<IPosition> = ({
  title,
  startDate,
  endDate,
  experiences,
}) => {
  return (
    <>
      <h4>{title}</h4>
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
