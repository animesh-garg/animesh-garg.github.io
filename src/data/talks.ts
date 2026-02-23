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
    title: "The Hard Part Is Not Training Robots. It Is Making Them Generalize?",
    date: "Jan 2026, Building Deep Tech Podcast",
    videoUrl: "https://www.youtube.com/watch?v=-XeZnCZ3QlI&themeRefresh=1",
    imageUrl: "/assets/pdfs/garg-building-deep-tech.jan26-pod.jpg",
  },
  {
    title: "Generalizable Embodied AI with Agentic Frameworks",
    date: "Jul 2025, RSS/ICML Workshops",
    videoUrl: "https://youtu.be/9yPANZu5P34?si=ee190SXRSad8Cupm",
    imageUrl: "/assets/pdfs/garg-planning-rss25-wksp.jpg",
  },
  {
    title: "Data will Solve Robotics?",
    date: "May 2025, ICRA Keynote Debate",
    videoUrl: "https://youtu.be/PfvctjoMPk8?si=UWme-89_Za054aeA&t=196",
    imageUrl: "/assets/pdfs/garg-icra-keynote-debate-may2025.jpg",
    slidesUrl: "/assets/pdfs/garg-icra-keynote-debate-may2025.pdf",
  },
   {
    title: "Surgical Autonomy in the era of Generative AI",
    date: "May 2025, ICRA Workshop on Surgical Robotics ",
    videoUrl: "https://www.youtube.com/watch?v=ipWgQ_imks8",
    imageUrl: "/assets/pdfs/garg-surgical-icra25-wksp.jpg",
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
