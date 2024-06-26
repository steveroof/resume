import { IJob, ICompany } from "../model";

const rww_misc: IJob = {
  title: "Database Application Developer",
  startDate: "2010-09",
  endDate: "2012-08",
  experiences: [
    "Identified automation and data storage needs within the company.",
    "Worked to develop custom database applications from conception to production.",
    "Considered best ways to model entity relationships in a table structure.",
    "Laid out relational tables according to normalization rules.",
    "Created stored procedures, triggers, and permissions on database objects.",
    "Designed, tested, and rolled out custom user interfaces for the SQL server backend using Microsoft Access/VBA.",
  ],
};

export const realWinWin: ICompany = {
  companyName: "RealWinWin",
  location: "Philadelphia, PA",
  locationType: "On Site",
  jobs: [rww_misc],
};
