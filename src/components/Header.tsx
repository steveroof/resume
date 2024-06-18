import { useState } from "react";

interface IHeaderProps {
  name: string;
}
export const Header: React.FC<IHeaderProps> = ({ name }) => {
  const [isLightMode, setLightMode] = useState(false);

  return (
    <header className={`header ${isLightMode ? "lightMode" : ""}`}>
      <h1>{name}</h1>
      <span className="headerDetails">
        <button
          title="Toggle theme"
          onClick={() => setLightMode((prev) => !prev)}
        >
          {isLightMode ? "🌙" : "☀️"}
        </button>
      </span>
    </header>
  );
};
