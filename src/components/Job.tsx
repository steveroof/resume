import { IJob } from "../model";
import "../assets/job.css";

interface IJobProps {
  id: string;
  job: IJob;
}
export const Job: React.FC<IJobProps> = ({ id, job }) => {
  const { title, startDate, endDate, experiences } = job;

  const durationMS =
    (endDate ? new Date(endDate) : new Date()).getTime() -
    new Date(startDate).getTime();

  const durationYears = durationMS / 1000 / 60 / 60 / 24 / 365;

  return (
    <section id={id} className="jobCard">
      <span className="jobHeading">
        <h4>{`💼 ${title}`}</h4>
        <span className="jobHeadingDetails">{`${startDate} - ${
          endDate ?? "Present"
        } (${durationYears.toFixed(1)} year${
          durationYears > 1 ? "s" : ""
        })`}</span>
      </span>
      <ul className="experienceList">
        {experiences.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </section>
  );
};
