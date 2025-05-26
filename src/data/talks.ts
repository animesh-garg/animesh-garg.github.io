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
    title: "Data will Solve Robotics?",
    date: "May 2025, ICRA Keynote Debate",
    imageUrl: "/assets/pdfs/garg-icra-keynote-debate-may2025.jpg",
    slidesUrl: "/assets/pdfs/garg-icra-keynote-debate-may2025.pdf",
  },
  {
    title: "Representations for Embodied FMs",
    date: "Apr 2025, ICLR Robot Learning Workshop",
    videoUrl: "https://iclr.cc/virtual/2025/workshop/23997#wse-detail-10000228",
    imageUrl: "/assets/pdfs/garg-robot-learning-wksp-iclr-apr25.jpg",
    slidesUrl: "/assets/pdfs/garg-robot-learning-wksp-iclr-apr25.pdf",
  },
  {
    title: "Priors as Abstractions for Autonomy",
    date: "June 2024, CVPR CORR Workshop",
    videoUrl: "https://www.youtube.com/watch?v=Pu1i0VK5F6I",
  },
  {
    title: "Towards Generalizable Autonomy",
    date: "Mar 2023, NURO Seminar Series",
    videoUrl: "https://www.youtube.com/watch?v=i81TjWOSv7E",
  },
  {
    title: "Building Blocks of Embodied AI",
    date: "Oct 2022 Stanford Robotics Seminar",
    videoUrl: "https://www.youtube.com/watch?v=M8LAIiU7VPA",
  },
  {
    title: "Generalizable Autonomy for Robot Manipulation",
    date: "Jan 2020, MIT Deep Learning Lecture",
    videoUrl: "https://www.youtube.com/watch?v=8Kn4Gi8iSYQ",
  },
];
