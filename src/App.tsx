import React from "react";
import { myData } from "./data";

export const App: React.FC = () => {
  const { summary, companies, education, skills, updateDate } = myData;

  const jobsMarkup = companies.map((c) => {
    const { companyName, location, locationType, jobs } = c;

    const id = createId([companyName]);
    return (
      <section key={id} id={id} className="company">
        <h3>{companyName}</h3>
        <span>{location}</span>
        <span>{locationType}</span>
        {jobs.map((j) => {
          const { title, startDate, endDate, experiences } = j;

          const id = createId([companyName, title]);
          return (
            <section key={id} id={id} className="job">
              <h4>{title}</h4>
              {/* todo: add duration */}
              <span>{`${startDate} - ${endDate}`}</span>
              <ul className="experience">
                {experiences.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </section>
    );
  });

  const educationMarkup = education.map((e) => {
    const { name, location, level, startYear, endYear } = e;
    const id = createId([name]);
    return (
      <div key={id} id={id} className="education">
        <span>{name}</span>
        <span>{location}</span>
        <span>{level}</span>
        <span>{`${startYear} - ${endYear}`}</span>
      </div>
    );
  });

  const skillsMarkup = skills.map((s, index) => <li key={index}>{s}</li>);

  return (
    <>
      <header>
        <h1>Stephen Roof</h1>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <span>{summary}</span>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {jobsMarkup}
        </section>

        <section id="education">
          <h2>Education</h2>
          {educationMarkup}
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills">{skillsMarkup}</ul>
        </section>
      </main>

      <footer>
        <span>{`Updated ${updateDate}`}</span>
      </footer>
    </>
  );
};

const createId = (strings: string[]) => {
  const id = strings.map((s) => s.toLowerCase().replaceAll(" ", "_")).join("_");
  return id;
};
