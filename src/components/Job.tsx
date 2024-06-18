import { IJob } from "../model";

interface IJobProps {
  id: string;
  job: IJob;
}
export const Job: React.FC<IJobProps> = ({ id, job }) => {
  const { title, startDate, endDate, experiences } = job;

  return (
    <section id={id} className="job">
      <span className="jobHeading">
        <h4>{`💼 ${title}`}</h4>
        <span className="jobHeadingDetails">{`${startDate} - ${endDate} ()`}</span>
      </span>
      <ul className="experienceList">
        {experiences.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </section>
  );
};
