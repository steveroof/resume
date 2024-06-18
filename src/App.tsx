import React from "react";
import { myData } from "./data";

export const App: React.FC = () => {
  const { summary, companies, education, skills, updateDate } = myData;

  const experienceMarkup = (
    <div className="experience">
      {companies.map((c) => {
        const { companyName, location, locationType, jobs } = c;

        const id = createId([companyName]);
        return (
          <div key={id} id={id} className="company">
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
                const { title, startDate, endDate, experiences } = j;

                const id = createId([companyName, title]);
                return (
                  <section key={id} id={id} className="job">
                    <span className="jobHeading">
                      <h4>{`💼 ${title}`}</h4>
                      <span>{`${startDate} - ${endDate} ()`}</span>
                    </span>
                    <ul className="experienceList">
                      {experiences.map((e, index) => (
                        <li key={index}>{e}</li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  const educationMarkup = (
    <ul>
      {education.map((e) => {
        const { name, location, level, startYear, endYear } = e;
        const id = createId([name]);

        return (
          <li key={id} id={id} className="education">
            <span>{name}</span>
            <span>{location}</span>
            <span>{level}</span>
            <span>{`${startYear} - ${endYear}`}</span>
          </li>
        );
      })}
    </ul>
  );

  const skillsMarkup = (
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

  return (
    <div className="page">
      <header>
        <h1>Stephen Roof</h1>
      </header>

      <main>
        <section id="about" className="mainSection">
          <h2>{`💡 About`}</h2>
          <span>{summary}</span>
        </section>

        <section id="skills" className="mainSection">
          <h2>{`💻 Skills`}</h2>
          {skillsMarkup}
        </section>

        <section id="experience" className="mainSection">
          <h2>{`💭 Experience`}</h2>
          {experienceMarkup}
        </section>

        <section id="education" className="mainSection">
          <h2>{`🎓 Education`}</h2>
          {educationMarkup}
        </section>
      </main>

      <footer>
        <span>{`Updated ${updateDate}`}</span>
      </footer>
    </div>
  );
};

const createId = (strings: string[]) => {
  const id = strings.map((s) => s.toLowerCase().replaceAll(" ", "_")).join("_");
  return id;
};
