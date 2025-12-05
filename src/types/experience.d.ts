export interface IExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export interface IEducationItem {
  type: 'academic' | 'certification' | 'diploma';
  title: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}
