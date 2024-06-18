export interface IData {
  summary: string;
  companies: ICompany[];
  education: IEducation[];
  skills: string[];
  updateDate: string;
}

export interface ICompany {
  companyName: string;
  location: string;
  locationType: string;
  jobs: IJob[];
}

export interface IJob {
  title: string;
  startDate: string;
  endDate: string;
  experiences: string[];
}

export interface IEducation {
  name: string;
  location: string;
  level?: string;
  startYear?: string;
  endYear: string;
}
