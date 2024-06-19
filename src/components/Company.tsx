import { createId } from "../helpers";
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
  const start = jobs[jobs.length - 1].startDate;
  const end = jobs[0].endDate;

  const durationMS =
    (end ? new Date(end) : new Date()).getTime() - new Date(start).getTime();

  const durationYears = durationMS / 1000 / 60 / 60 / 24 / 365;

  return (
    <div id={id} className="company">
      <span className="companyHeading">
        <h3>{`🏢 ${companyName}`}</h3>
        <span className="companyHeadingDetails">
          <span>🎯</span>
          <span>{locationType}</span>
          <span>|</span>
          <span>{location}</span>
          <span>|</span>
          <span>{`${durationYears.toFixed(1)} Year${
            durationYears > 1 ? "s" : ""
          }`}</span>
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
