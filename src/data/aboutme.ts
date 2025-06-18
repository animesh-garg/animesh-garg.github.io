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
  institution: "Georgia Tech",
  // Note that links work in the description
  description: `
    I am a <a href=https://research.gatech.edu/animesh-garg>Stephen Fleming Early Career Professor</a> in Computer Science at Georgia Tech. I am in the <a href=https://www.ic.gatech.edu><i>School of Interactive Computing</i></a> affiliated with <a href=https://www.research.gatech.edu/robotics/faculty/core><i>Robotics</i></a> and <a href=https://ml.gatech.edu/people/faculty/phdprogramfaculty><i>Machine Learning</i></a> programs. I also hold courtesy appointments at University of Toronto and Vector Institute. I have previously held research leadership positions at Nvidia and Apptronik. <br><br>
    My research vision is to build the <i>Algorithmic Foundations for Generalizable Autonomy</i>, that enables robots to acquire skills, at both cognitive & dexterous levels, and to seamlessly interact & collaborate with humans in novel environments. My group focuses on understanding <i>structured inductive biases</i> and <i>causality for decision making</i>. In particular we are looking at <i>multi-modal object-centric and spatiotemporal event representations</i>, <i>self-supervised pre-training for reinforcement learning & control</i>, <i>principle of efficient dexterous skill learning</i>.<br><br>
    <b>Research Interests:</b> Foundation Models, Reinforcement Learning, Robotics, 3D Vision.<br>
    <b>Current Applications:</b> Self-Driving Labs, Surgical Robotics, Manufacturing.<br><br>
    <i>Check out <a href="https://pairlab.github.io"><b>PAIR Group</b></a> for info on our research and how to join us.</i>
    `,
  email: "animesh.garg@gatech.edu",
  imageUrl:    
    "/assets/animesh-garg-profile-white-nov23.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=zp8V7ZMAAAAJ",
  githubUsername: "animesh-garg",
  linkedinUsername: "animeshgarg",
  twitterUsername: "animesh_garg",
  blogUrl: "https://roboticks.substack.com/",
  cvUrl: "/assets/garg-cv-0425.pdf",
  institutionUrl: "https://www.gatech.edu",
  labPage: "https://www.pair.toronto.edu",
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
