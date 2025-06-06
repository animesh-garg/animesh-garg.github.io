export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024-",
    title: "Assistant Professor",
    company: "Georgia Institute of Technology",
    // description:
    //   "School of Interactive Computing",
    companyUrl: "https://www.ic.gatech.edu", 
  },
  {
    date: "2024-2025",
    title: "Chief Scientific Officer",
    company: "Apptronik",
    companyUrl: "https://www.apptronik.com", 
  },
  {
    date: "2018-2024",
    title: "Senior Staff Research Scientist",
    company: "Nvidia Research",
    // description: 
    //   "large language models, generative models, and robotics",   
    companyUrl: "https://research.nvidia.com",
  },
  {
    date: "2019-2023",
    title: "Assistant Professor",
    company: "University of Toronto / Vector Institute",
    companyUrl: "https://www.cs.toronto.edu", 
  },
  {
    date: "2016-2018",
    company: "Stanford University",
    title: "Postdoc in Computer Science",
    companyUrl: "https://www.cs.stanford.edu", 
  },
];
