export interface Education {
  year: string;
  institution: string;
  degree: string;
  degree2?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2016-2018",
    institution: "Stanford University",
    degree: "Postdoc in Computer Science",
    advisor: "",
  },
  {
    year: "2011—2016",
    institution: "UC Berkeley",
    degree: "Ph.D. in Operations Research",
    degree2: "MS in Computer Science",
  },
  // {
  //   year: "2011—2016",
  //   institution: "UC Berkeley",
  //   degree: "MS in Computer Science",
  //   advisor: "",
  // },
  {
    year: "2010—2011",
    institution: "Georgia Tech",
    degree: "MS in Industrial Engineering",
    advisor: "",
  },
  {
    year: "2006—2010",
    institution: "University of Delhi",
    degree: "B.E. in Manufacturing Processes & Automation",
    thesis: "",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
