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
      }/${updateDate.getDate()}/${updateDate.getFullYear()} | ${daysAgo} day(s) ago`}</span>
      <span className="footerLinks">
        <a href="https://github.com/steveroof/resume">View the code</a>
        <a href="www.linkedin.com/in/stephenroof">Linkedin</a>
      </span>
    </footer>
  );
};
