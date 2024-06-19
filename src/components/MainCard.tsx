import { PropsWithChildren } from "react";
import "../assets/mainCard.css";

interface IMainCardProps extends PropsWithChildren {
  titleText: string;
}
export const MainCard: React.FC<IMainCardProps> = ({ titleText, children }) => {
  return (
    <section className="mainCard">
      <h2>{titleText}</h2>
      {children}
    </section>
  );
};
