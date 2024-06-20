import { IJob } from "../model";
import "../assets/job.css";
import { getDurationYears } from "../helpers";

interface IJobProps {
  id: string;
  job: IJob;
}
export const Job: React.FC<IJobProps> = ({ id, job }) => {
  const { title, startDate, endDate, experiences } = job;
  const { startAndEnd, duration } = getDurationYears(startDate, endDate);

  return (
    <section id={id} className="jobCard">
      <span className="jobHeading">
        <h4>{`💼 ${title}`}</h4>
        <span className="jobHeadingDetails">
          {`${startAndEnd} (${duration})`}
        </span>
      </span>
      <ul className="experienceList">
        {experiences.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </section>
  );
};
