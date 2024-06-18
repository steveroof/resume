import React from "react";
import { myData } from "../data";
import { MainCard } from "./MainCard";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { createId } from "../helpers";
import { Company } from "./Company";

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
          <div className="experience">
            {companies.map((c) => {
              const id = createId([c.companyName]);
              return <Company key={id} id={id} company={c} />;
            })}
          </div>
        </MainCard>
        <MainCard titleText="🎓 Education">
          <Education educations={educations} />
        </MainCard>
      </main>

      <Footer updateDate={updateDate} />
    </div>
  );
};
