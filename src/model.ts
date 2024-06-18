export interface IData {
  summary: string;
  companies: ICompany[];
  educations: IEducation[];
  skills: ISkills;
  updateDate: Date;
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
  endDate?: string;
  experiences: string[];
}

export interface IEducation {
  name: string;
  location: string;
  level?: string;
  startYear?: string;
  endYear: string;
}

export interface ISkills {
  database: string[];
  backend: string[];
  frontend: string[];
  collaboration: string[];
}
