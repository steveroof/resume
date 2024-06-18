import React, { PropsWithChildren, useState } from "react";
import { myData } from "./data";
import { ICompany, IEducation, IJob, ISkills } from "./model";

export const App: React.FC = () => {
  const { summary, companies, educations, skills, updateDate } = myData;
  return (
    <div className="page">
      <header>
        <h1>Stephen Roof</h1>
      </header>

      <main>
        <MainCard titleText="💡 About">
          <span>{summary}</span>
        </MainCard>
        <MainCard titleText="💻 Skills">
          <Skills skills={skills} />
        </MainCard>
        <MainCard titleText="💭 Experience">
          <Companies companies={companies} />
        </MainCard>
        <MainCard titleText="🎓 Education">
          <Education educations={educations} />
        </MainCard>
      </main>

      <Footer updateDate={updateDate} />
    </div>
  );
};

interface IMainCardProps extends PropsWithChildren {
  titleText: string;
}
const MainCard: React.FC<IMainCardProps> = ({ titleText, children }) => {
  return (
    <section className="mainSection">
      <h2>{titleText}</h2>
      {children}
    </section>
  );
};

interface IFooterProps {
  updateDate: Date;
}
const Footer: React.FC<IFooterProps> = ({ updateDate }) => {
  const [dateLoaded] = useState(new Date());

  const msAgo = dateLoaded.getTime() - updateDate.getTime();
  const daysAgo = Math.round(msAgo / 1000 / 60 / 60 / 24);

  return (
    <footer className="footer">
      <span>{`Latest patch: ${
        updateDate.getMonth() + 1
      }/${updateDate.getDate()}/${updateDate.getFullYear()} | ${daysAgo} day(s) ago`}</span>
    </footer>
  );
};

interface ISkillsProps {
  skills: ISkills;
}
const Skills: React.FC<ISkillsProps> = ({ skills }) => {
  return (
    <div className="skillsGrid">
      <section className="skillsColumn">
        <h4>{`Database 💾`}</h4>
        {skills.database.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillsColumn">
        <h4>{`Backend ⚙️`}</h4>
        {skills.backend.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillsColumn">
        <h4>{`Frontend 🎨`}</h4>
        {skills.frontend.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillsColumn">
        <h4>{`Collaboration 🤝`}</h4>
        {skills.collaboration.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
    </div>
  );
};

interface ICompaniesProps {
  companies: ICompany[];
}
const Companies: React.FC<ICompaniesProps> = ({ companies }) => {
  return (
    <div className="experience">
      {companies.map((c) => {
        const id = createId([c.companyName]);
        return <Company key={id} id={id} company={c} />;
      })}
    </div>
  );
};

interface ICompanyProps {
  id: string;
  company: ICompany;
}
const Company: React.FC<ICompanyProps> = ({ id, company }) => {
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

interface IJobProps {
  id: string;
  job: IJob;
}
const Job: React.FC<IJobProps> = ({ id, job }) => {
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

interface IEducationProps {
  educations: IEducation[];
}
const Education: React.FC<IEducationProps> = ({ educations }) => {
  return (
    <ul>
      {educations.map((e) => {
        const { name, location, level, startYear, endYear } = e;

        return (
          <li key={createId([name])} className="education">
            <span>{name}</span>
            <span>{location}</span>
            <span>{level}</span>
            <span>{`${startYear} - ${endYear}`}</span>
          </li>
        );
      })}
    </ul>
  );
};

const createId = (strings: string[]) => {
  const id = strings.map((s) => s.toLowerCase().replaceAll(" ", "_")).join("_");
  return id;
};
