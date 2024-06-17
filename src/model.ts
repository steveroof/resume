export interface IData {
  summary: string;
  tenures: ITenure[];
  education: IEducation[];
  skills: string[];
}

export interface ITenure {
  companyName: string;
  location: string;
  locationType: string;
  jobs: IPosition[];
}

export interface IPosition {
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
