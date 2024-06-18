import { IData } from "../model";
import { connolly } from "./connolly";
import { drexel, hh } from "./education";
import { realWinWin } from "./realWinWin";
import { signant } from "./signant";

export const myData: IData = {
  name: "Stephen Roof",
  summary:
    'I believe in "keep it simple", "you ain\'t gonna need it", and continuous refactoring. I prioritize readability and maintainability. I enjoy working on front end web application development, especially writing React, Typescript, and CSS. I have extensive experience with SQL Server.',
  companies: [signant, connolly, realWinWin],
  educations: [drexel, hh],
  skills: {
    database: ["Microsoft SQL Server"],
    backend: [
      "ASP.NET Core",
      "ASP.NET MVC",
      "Entity Framework",
      "ASP.NET Web Forms",
    ],
    frontend: [
      "React.js",
      "Cascading Style Sheets (CSS)",
      "TypeScript",
      "Angular",
      "jQuery",
    ],
    collaboration: ["Communication"],
  },
  updateDate: new Date("2024-06-18 EDT"),
};
