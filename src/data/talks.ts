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
    title: "Building Blocks of Embodied AI",
    date: "Oct 2022",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/watch?v=M8LAIiU7VPA",
    slidesUrl: "https://www.youtube.com/watch?v=M8LAIiU7VPA",
  },
  {
    title: "Generalizable Autonomy for Robot Manipulation",
    date: "Jan 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/watch?v=8Kn4Gi8iSYQ",
  },
];
