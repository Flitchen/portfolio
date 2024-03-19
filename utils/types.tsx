export interface btnProps {
  title: string;
}

export interface TitleProps {
  title: string;
  subtitle?: string;
}
export interface EducationDialogProps {
  startYear: number;
  graduateYear: number;
  educationLevel: string;
  placeOfStudy: string;
  additionalDescription: string;
}
export interface ServiceDialogProps {
  skill: string;
  description: string;
  children?: React.ReactNode;
}
export interface SkillsDialogProps {
  skillTitle: string;
  skills?: Array<string>;
}
