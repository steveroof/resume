import { createId, getDurationYears } from "../helpers";
import { ICompany } from "../model";
import { Job } from "./Job";
import "../assets/company.css";

interface ICompanyProps {
  id: string;
  company: ICompany;
}
export const Company: React.FC<ICompanyProps> = ({ id, company }) => {
  const { companyName, locationType, location, jobs } = company;
  //this assumes an ordering of newest at the top in the data object. todo: improve.
  const startDate = jobs[jobs.length - 1].startDate;
  const endDate = jobs[0].endDate;
  const { duration } = getDurationYears(startDate, endDate);

  return (
    <div id={id} className="company">
      <span className="companyHeading">
        <h3>{`🏢 ${companyName}`}</h3>
        <span className="companyHeadingDetails">
          <span>🎯</span>
          <span>{locationType}</span>
          <span>{location}</span>
          <span>{`(${duration})`}</span>
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
