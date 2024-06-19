import { myData } from "../data";
import { MainCard } from "./MainCard";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { createId } from "../helpers";
import { Company } from "./Company";
import { Header } from "./Header";
import "../assets/app.css";

export const App: React.FC = () => {
  const { name, summary, companies, educations, skills, updateDate } = myData;

  return (
    <div className="page">
      <Header name={name} />
      <main>
        <MainCard titleText="💡 About">
          <span>{summary}</span>
        </MainCard>
        <MainCard titleText="💻 Skills">
          <Skills skills={skills} />
        </MainCard>
        <MainCard titleText="🎓 Education">
          <Education educations={educations} />
        </MainCard>
        <MainCard titleText="⏳ Experience">
          <div className="experience">
            {companies.map((c) => {
              const id = createId([c.companyName]);
              return <Company key={id} id={id} company={c} />;
            })}
          </div>
        </MainCard>
      </main>

      <Footer updateDate={updateDate} />
    </div>
  );
};
