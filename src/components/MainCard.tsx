import { PropsWithChildren } from "react";

interface IMainCardProps extends PropsWithChildren {
  titleText: string;
}
export const MainCard: React.FC<IMainCardProps> = ({ titleText, children }) => {
  return (
    <section className="mainSection">
      <h2>{titleText}</h2>
      {children}
    </section>
  );
};
