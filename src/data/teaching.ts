export interface Teaching {
  number: string;
  title: string;
  description?: string;
  offering?: string; 
  link?: string;
}

export const teachingData: Teaching[] = [
  // If you don't want to show teaching, just make the array empty.
  {
    number: "CS 3600",
    title: "Introduction to AI (UG)",
    offering: "Sp25",
    // description: "Large GT class on intro to ai",
    link: "https://www.cc.gatech.edu/classes/AY2025/cs3600_fall/ ",
  },
  {
    number: "CS 8803",
    title: "Deep Reinforcement Learning (Grad)",
    offering: "F24, F25",
    // description: "Graduate class on deep reinforcement learning",
    link: "",
  },
  {
    number: "CSC 375",
    title: "Algorithmic Intelligence in Robotics (UG)",
    offering: "F20, Sp22",
    // description: "Introduction to AI in robotic manipulation",
    link: "",
  },
  {
    number: "CSC 2547",
    title: "Deep Learning: 3D & Geometric Structure (Grad) ",
    offering: "Sp21",
    link: "https://www.youtube.com/channel/UCrsmAXnwu6sgccWevW12Dfg",
  },
  {
    number: "CSC 475",
    title: "Introduction to Reinforcement Learning (UG) ",
    offering: "Sp21, F21",
  },  
  {
    number: "CSC 2621",
    title: "Reinforcement Learning (Grad)",
    offering: "Sp20",
  }
];
