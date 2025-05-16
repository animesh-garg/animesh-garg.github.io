export interface Talks {
  title: string;
  date: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export const talksData: Talks[] = [
  // Example entry
  {
    title: "Priors as Abstractions for Autonomy",
    date: "June 2024, CVPR CORR Workshop",
    videoUrl: "https://www.youtube.com/watch?v=Pu1i0VK5F6I",
  },
  {
    title: "Building Blocks of Embodied AI",
    date: "Oct 2022 Stanford Robotics Seminar",
    videoUrl: "https://www.youtube.com/watch?v=M8LAIiU7VPA",
    // slidesUrl: "https://www.youtube.com/watch?v=M8LAIiU7VPA",
  },
  {
    title: "Generalizable Autonomy for Robot Manipulation",
    date: "Jan 2020, MIT Deep Learning Lecture",
    videoUrl: "https://www.youtube.com/watch?v=8Kn4Gi8iSYQ",
  },
];
