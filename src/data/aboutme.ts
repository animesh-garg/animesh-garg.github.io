export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  labPage?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  addressOffice?: string;
  address?: string;
  addressURL?:string;
}

export const aboutMe: AboutMe = {
  name: "Animesh Garg",
  title: "AI Researcher",
  institution: "Georgia Institute of Technology",
  // Note that links work in the description
  description: `
    I am a <a href=https://research.gatech.edu/animesh-garg>Stephen Fleming Early Career Professor</a> in Computer Science at Georgia Tech. I am in the <a href=https://www.ic.gatech.edu/person/faculty><i>School of Interactive Computing</i></a> affiliated with <a href=https://www.research.gatech.edu/robotics/faculty/core><i>Robotics</i></a> and <a href=https://ml.gatech.edu/people/faculty/phdprogramfaculty><i>Machine Learning</i></a> programs. I also hold courtesy appointments at University of Toronto and Vector Institute. I have previously held research leadership positions at Nvidia and Apptronik. <br><br>
    My research vision is to build the <i>Algorithmic Foundations for Generalizable Autonomy</i>, that enables robots to acquire skills, at both cognitive & dexterous levels, and to seamlessly interact & collaborate with humans in novel environments. My group focuses on understanding <i>structured inductive biases</i> and <i>causality for decision making</i>. In particular we are looking at <i>multi-modal object-centric and spatiotemporal event representations</i>, <i>self-supervised pre-training for reinforcement learning & control</i>, <i>principle of efficient dexterous skill learning</i>.<br><br>
    <b>Research Interests:</b> Foundation Models, Reinforcement Learning, Robotics, 3D Vision.<br>
    <b>Current Applications:</b> Self-Driving Labs, Surgical Robotics, Personal Robotics.<br><br>
    <i>Check out <a href="https://pair.toronto.edu/">PAIR Group</a> for more on current reseearch projects, members and how to join.</i>
    `,
  email: "animesh.garg@gatech.edu",
  imageUrl:
    "/assets/animesh-sept19-sq.jpg",
    // "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=zp8V7ZMAAAAJ",
  githubUsername: "animesh-garg",
  linkedinUsername: "animeshgarg",
  twitterUsername: "animesh_garg",
  blogUrl: "https://roboticks.substack.com/",
  cvUrl: "/assets/garg-cv-0425.pdf",
  institutionUrl: "https://www.gatech.edu",
  labPage: "pair.toronto.edu",
  addressOffice: "CODA S1145, Atlanta, GA",
  address: `
  CODA Building S1145,  <br> 
  756 W Peachtree St NW,  <br>  
  Atlanta, GA, 30308.
  `,
  addressURL: "https://maps.app.goo.gl/hcz9DiJ9224uPdBs5"
  // altName: "",
  // secretDescription: "I like dogs.",
};
