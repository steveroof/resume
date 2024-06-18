import { IData } from "../model";
import { connolly } from "./connolly";
import { drexel, hh } from "./education";
import { realWinWin } from "./realWinWin";
import { signant } from "./signant";

export const myData: IData = {
  summary:
    'I believe in "keep it simple", "you ain\'t gonna need it", and continuous refactoring. I prioritize readability and maintainability. I enjoy working on front end web application development, especially writing React, Typescript, and CSS. I have extensive experience with SQL Server.',
  companies: [signant, connolly, realWinWin],
  education: [drexel, hh],
  skills: [
    "Microsoft SQL Server",
    "React.js",
    "Cascading Style Sheets (CSS)",
    "TypeScript",
    "ASP.NET Core",
    "Angular",
    "ASP.NET MVC",
    "Entity Framework",
    "jQuery",
    "ASP.NET Web Forms",
  ],
  updateDate: "18-JUN-2018",
};
