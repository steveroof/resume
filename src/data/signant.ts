import { IJob, ICompany } from "../model";

const signant_pi_senior: IJob = {
  title: "Senior Software Engineer",
  startDate: "May 2023",
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
  startDate: "October 2013",
  endDate: "April 2015",
  experiences: [
    "Worked on the implementation/configuration of existing software.",
    "Wrote SQL data scripts, responded to bug reports, built client devices.",
    "Began adding new features/enhancements to the software products.",
  ],
};

export const signant: ICompany = {
  companyName: "Signant Health",
  location: "Blue Bell, PA",
  locationType: "On Site & Hybrid",
  jobs: [signant_pi_senior, signant_pi_mid, signant_pi_associate, signant_td],
};
