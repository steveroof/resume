import "../assets/footer.css";

interface IFooterProps {
  updateDate: Date;
}
export const Footer: React.FC<IFooterProps> = ({ updateDate }) => {
  const msAgo = new Date().getTime() - updateDate.getTime();
  const daysAgo = Math.round(msAgo / 1000 / 60 / 60 / 24);

  return (
    <footer className="footer">
      <span>{`Updated: ${
        updateDate.getMonth() + 1
      }/${updateDate.getDate()}/${updateDate.getFullYear()} | ${daysAgo} day${
        daysAgo > 1 ? "s" : ""
      } ago`}</span>
    </footer>
  );
};
