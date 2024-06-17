import { IPosition, ITenure } from "../model";

const connolly_bsa: IPosition = {
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

export const connolly: ITenure = {
  companyName: "Connolly, Inc.",
  location: "Conshohocken, PA",
  locationType: "On Site",
  jobs: [connolly_bsa],
};
