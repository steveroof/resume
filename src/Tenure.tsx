import { PropsWithChildren } from "react";
import { ITenure } from "./model";

export const Tenure: React.FC<PropsWithChildren<ITenure>> = ({
  companyName,
  location,
  locationType,
  children,
}) => {
  return (
    <>
      <h3>{companyName}</h3>
      <span>{location}</span>
      <span>{locationType}</span>
      {children}
    </>
  );
};
