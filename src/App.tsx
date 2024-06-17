import { Tenure } from "./Tenure";
import { myData } from "./assets/data";

export const App: React.FC = () => {
  return (
    <>
      <h1>Stephen Roof</h1>
      {myData.tenures.map((t, index) => (
        <Tenure key={index} {...t} />
      ))}
    </>
  );
};
