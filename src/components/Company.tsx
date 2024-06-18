import { createId } from "../helpers";
import { ICompany } from "../model";
import { Job } from "./Job";

interface ICompanyProps {
  id: string;
  company: ICompany;
}
export const Company: React.FC<ICompanyProps> = ({ id, company }) => {
  const { companyName, locationType, location, jobs } = company;

  return (
    <div id={id} className="company">
      <span className="companyHeading">
        <h3>{`🏢 ${companyName}`}</h3>{" "}
        <span className="companyHeadingDetails">
          <span>🎯</span>
          <span>{locationType}</span>
          <span>|</span>
          <span>{location}</span>
        </span>
      </span>
      <div className="jobList">
        {jobs.map((j) => {
          const id = createId([companyName, j.title]);
          return <Job key={id} id={id} job={j} />;
        })}
      </div>
    </div>
  );
};
