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
    link: "",
  },
  {
    number: "CS 8803",
    title: "Deep Reinforcement Learning (Grad)",
    offering: "F24, F25",
    // description: "Graduate class on deep reinforcement learning",
    link: "https://www.pair.toronto.edu/cs8803-drl-f24/",
  },
  {
    number: "CSC 375",
    title: "Algorithmic Intelligence in Robotics (UG)",
    offering: "F20, Sp22",
    // description: "Introduction to AI in robotic manipulation",
    link: "https://www.pair.toronto.edu/csc375-f20/",
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
    link:"https://www.pair.toronto.edu/csc498-f21/",
  },  
  {
    number: "CSC 2621",
    title: "Reinforcement Learning (Grad)",
    offering: "Sp20",
    link:"https://www.pair.toronto.edu/csc2621-w20/",
  }
];
