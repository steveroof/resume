import { Education } from "./Education";
import { Position } from "./Position";
import { Tenure } from "./Tenure";
import { myData } from "./data";

export const App: React.FC = () => {
  const { summary, tenures, education, skills } = myData;

  return (
    <>
      <h1>Stephen Roof</h1>
      <h2>About</h2>
      <div>{summary}</div>
      <h2>Experience</h2>
      {tenures.map((t, index) => (
        <Tenure key={index} {...t}>
          {t.jobs.map((p, index) => (
            <Position key={index} {...p} />
          ))}
        </Tenure>
      ))}
      <h2>Education</h2>
      {education.map((e, index) => (
        <Education key={index} {...e} />
      ))}
      <h2>Skills</h2>
      <ul>
        {skills.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </>
  );
};
