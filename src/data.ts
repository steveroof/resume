export interface IJob {
  title: string;
  startDate: string;
  endDate: string;
  experiences: string[];
}

export interface ITenure {
  companyName: string;
  location: string;
  locationType: string;
  jobs: IJob[];
}

export interface IData {
  tenures: ITenure[];
}

const signant_pi_senior: IJob = {
  title: "Senior Software Engineer",
  startDate: "May 2023",
  endDate: "Present",
  experiences: [
    "Integrated Okta SSO into our React, .Net, jQuery, and Angular applications.",
    "Wrote complex SQL stored procedures/functions for processing custom business logic.",
    "Investigated and fixed slowly performing SQL queries using Query Store and execution plan analysis.",
    "Created a custom Single Log Out across the application suite for React, Angular, and jQuery.",
    "Addressed security concerns identified by 3rd party penetration testing.",
    "Trained new developers and performed code reviews in Bitbucket.",
    "Worked with Testing/QA team to develop and execute testing scenarios, reviewed test cases.",
    "Performed technical writing and documentation as needed for internal company Confluence.",
    "Investigated and triaged production issues raised by the users through Jira.",
    "Wrote automated browser tests using Robot and Selenium framework.",
    "Configured and deployed software through Azure pipelines.",
    "Configured IIS web server as needed.",
  ],
};

const signant_pi_mid: IJob = {
  title: "Product Developer",
  startDate: "Mar 2018",
  endDate: "May 2023",
  experiences: [
    "Created a fully tested and documented React component library and integrated it with our applications.",
    "Created new SPA applications in React with .Net Core API, configured Swagger.",
    "Wrote integration tests for React using Jest and React Testing Library.",
    "Wrote unit tests for Angular using Karma/Jasmine.",
    "Addressed security concerns identified by 3rd party penetration testing.",
    "Investigated and fixed slowly performing SQL queries using Query Store and execution plan analysis.",
    "Performed code reviews in Bitbucket.",
    "Worked with Testing/QA team to develop and execute testing scenarios, reviewed test cases.",
    "Performed technical writing and documentation as needed for internal company Confluence.",
    "Configured IIS web server as needed.",
  ],
};

const signant_pi_associate: IJob = {
  title: "Associate Product Developer",
  startDate: "April 2015",
  endDate: "March 2018",
  experiences: [
    "Worked in large and complex ASP Webforms codebase to reduce the number of postbacks and full page reloads by switching to jQuery Ajax code.",
    "Worked on a new application written in ASP.NET MVC and Entity Framework to replace a legacy Winforms application.",
    "Learned SPA Javascript frameworks/libraries such as Angular with Typescript.",
    "Wrote and optimized SQL Server stored procedures and functions.",
  ],
};

const signant_td: IJob = {
  title: "Programmer Analyst I",
  startDate: "April 2015",
  endDate: "March 2018",
  experiences: [
    "Worked on the implementation/configuration of existing software.",
    "Wrote SQL data scripts, responded to bug reports, built client devices.",
    "Began adding new features/enhancements to the software products.",
  ],
};

const connolly_bsa: IJob = {
  title: "Associate Business Systems Analyst",
  startDate: "August 2012",
  endDate: "October 2013",
  experiences: [
    "Worked directly with business users to identity and implement business needs with custom software.",
    "Supported internal processes through database and user interface development.",
    "Developed ETL skills and index/performance strategies working with large datasets.",
    "Improved data modeling skills and strategic denomalization/data warehouse storage and reporting skills.",
  ],
};

const rww_misc: IJob = {
  title: "Database Application Developer",
  startDate: "September 2010",
  endDate: "August 2012",
  experiences: [
    "Identified automation and data storage needs within the company.",
    "Worked to develop custom database applications from conception to production.",
    "Considered best ways to model entity relationships in a table structure.",
    "Laid out relational tables according to normalization rules.",
    "Created stored procedures, triggers, and permissions on database objects.",
    "Designed, tested, and rolled out custom user interfaces for the SQL server backend using Microsoft Access/VBA.",
  ],
};

const signant: ITenure = {
  companyName: "Signant Health",
  location: "Blue Bell, PA",
  locationType: "On Site & Hybrid",
  jobs: [signant_pi_senior, signant_pi_mid, signant_pi_associate, signant_td],
};

const connolly: ITenure = {
  companyName: "Connolly, Inc.",
  location: "Conshohocken, PA",
  locationType: "On Site",
  jobs: [connolly_bsa],
};

const realWinWin: ITenure = {
  companyName: "RealWinWin",
  location: "Philadelphia, PA",
  locationType: "On Site",
  jobs: [rww_misc],
};

export const myData: IData = {
  tenures: [signant, connolly, realWinWin],
};
