import { useState } from "react";

interface IHeaderProps {
  name: string;
}
export const Header: React.FC<IHeaderProps> = ({ name }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <header className={`header ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <h1>{name}</h1>
      <span className="headerDetails">
        <label htmlFor="chkDarkMode">Dark Mode</label>
        <input
          id="chkDarkMode"
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setDarkMode((prev) => !prev)}
        />
      </span>
    </header>
  );
};
