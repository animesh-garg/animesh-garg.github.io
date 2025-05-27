export interface News {
  date: string;
  title: string;
  description?: string;
  link?: string; 
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "May 2025",
    title: "Speaker at ICRA 2025 Keynote",
    link: "https://2025.ieee-icra.org/program/keynote-sessions/",
  },
  {
    date: "May 2025",
    title: "Invited Speaker at ICRA 2025 Workshops",
    description: `
    Speaking at <a href=https://sites.google.com/view/icra2025-workshop-clsr/>Surgical Robotics</a> and <a href=https://dyalab.mines.edu/2025/icra-workshop//>LLMs for TAMP</a> workshops.
    `
  },
  {
    date: "May 2025",
    title: "3 Paper accepted at ICRA 2025",
    description: `
    Our work <a href=https://orbit-surgical.github.io/sufia-bc/>Sufia-BC</a>, <a href=https://rocoda.github.io/>RoCODA</a>, <a href=https://plan-with-climb.github.io/>CLIMB</a> on will be at ICRA 2025.
    `,
    link: "https://2025.ieee-icra.org/program/",    
  },
  {
    date: "April 2025",
    title: "Program Chair at ICLR 2025",
    link: "https://iclr.cc/",
  },
  {
    date: "April 2025",
    title: "Speaker at ICLR 2025 Robot Learning Workshop",
    link: "https://iclr.cc/virtual/2025/workshop/23997#wse-detail-10000228",    
  },
  {
    date: "April 2025",
    title: "2 Paper accepted at ICLR 2025",
    description: `
    Our work <a href=https://arxiv.org/abs/2407.02466v3/>PWM</a> and  <a href=https://openreview.net/forum?id=zAyS5aRKV8/>EgoSim</a> on will be at ICLR 2025.
    `,
    link: "https://iclr.cc/virtual/2025/workshop/23997#wse-detail-10000228",    
  }
];
