import { ISkills } from "../model";
import "../assets/skills.css";

interface ISkillsProps {
  skills: ISkills;
}
export const Skills: React.FC<ISkillsProps> = ({ skills }) => {
  return (
    <div className="skillsGrid">
      <section className="skillBlock">
        <h4>{`Database 💾`}</h4>
        {skills.database.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillBlock">
        <h4>{`Backend ⚙️`}</h4>
        {skills.backend.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillBlock">
        <h4>{`Frontend 🎨`}</h4>
        {skills.frontend.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
      <section className="skillBlock">
        <h4>{`Collaboration 🤝`}</h4>
        {skills.collaboration.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </section>
    </div>
  );
};
