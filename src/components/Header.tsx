import { useState } from "react";
import "../assets/header.css";

interface IHeaderProps {
  name: string;
}
export const Header: React.FC<IHeaderProps> = ({ name }) => {
  const [isLightMode, setLightMode] = useState(false);

  return (
    <header className={`header ${isLightMode ? "lightMode" : ""}`}>
      <h1>{name}</h1>

      <a href="https://www.linkedin.com/in/stephenroof">
        linkedin.com/in/stephenroof
      </a>
      <a href="https://github.com/steveroof/resume">
        github.com/steveroof/resume
      </a>

      <button
        title="Toggle theme"
        className="themeButton"
        onClick={() => setLightMode((prev) => !prev)}
      >
        {isLightMode ? "🌚" : "🌞"}
      </button>
    </header>
  );
};
