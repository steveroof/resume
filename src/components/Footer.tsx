import "../assets/footer.css";

interface IFooterProps {
  updateDate: Date;
}
export const Footer: React.FC<IFooterProps> = ({ updateDate }) => {
  const msAgo = new Date().getTime() - updateDate.getTime();
  const daysAgo = Math.round(msAgo / 1000 / 60 / 60 / 24);

  return (
    <footer className="footer">
      <span>{`Latest patch: ${
        updateDate.getMonth() + 1
      }/${updateDate.getDate()}/${updateDate.getFullYear()} | ${daysAgo} day${
        daysAgo > 1 ? "s" : ""
      } ago`}</span>
      <span className="footerLinks">
        <a href="https://github.com/steveroof/resume">
          github.com/steveroof/resume
        </a>
        <a href="https://www.linkedin.com/in/stephenroof">
          linkedin.com/in/stephenroof
        </a>
      </span>
    </footer>
  );
};
