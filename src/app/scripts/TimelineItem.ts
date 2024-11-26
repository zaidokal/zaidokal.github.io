export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  accomplishments: string;
  category: string;
  image: string;
  screenshots: string[];
  github: string;
  technologies: {
    programmingLanguages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
  };
}
