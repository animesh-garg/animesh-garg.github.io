export interface News {
  date: string;
  title: string;
  description: string;
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
    date: "April 2025",
    title: "Program Chair at ICLR 2025",
    link: "https://iclr.cc/",
  },
  {
    date: "Jan 2025",
    title: "3 Paper accepted at ICRA 2025",
    description: `
    Our work <a href=https://orbit-surgical.github.io/sufia-bc/>Sufia-BC</a>, <a href=https://rocoda.github.io/>RoCODA</a>, <a href=https://plan-with-climb.github.io/>CLIMB</a> on will be at ICRA 2024.
    `,
    link: "https://2025.ieee-icra.org/program/",    
  }
];
