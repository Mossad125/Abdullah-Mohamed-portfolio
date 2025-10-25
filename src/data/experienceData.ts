export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Programming Trainer - FAO Model Developers",
    company: "",
    dates: "Nov 2023",
    description: [
      "Taught C# & OOP fundamentals via live Zoom/YouTube sessions.",
]
  },
  {
    title: "Speaker - GDSC Delta University",
    company: "",
    dates: "Jul 2023",
    description: [
      "Presented on immersive XR experiences and Unity-based game development.",

    ]
  },

    {
    title: "Unity Developer - Google I/O Mansoura Hackathon 2022",
    company: "ITI, Mansoura University",
    dates: "Jul 2022",
    description: [
      "Collaborated on prototyping/pitching. Developed a 3D web app in Unity for road/energy infrastructure in a 3-hour hackath",
    ]
  },
  {
    title: "Founding Partner - Helpers",
    company: "",
    dates: "Sep 2018 - Present",
    description: [
      "Built a diverse team of student mentors and volunteers to provide academic support across various subjects.",

    ]
  },

];