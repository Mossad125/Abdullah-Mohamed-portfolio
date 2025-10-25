export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Horse Skeleton Sim",
    summary: "A fully integrated, interactive system for anatomy education. Features QR-scannable bones, performance analytics, and assessment tools. Developed for Delta University - faculty of veterinary medicine.",
    images: [
      "/images/pro1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ],
    tags: ["Unity", "Blender", "Unity"],
    details: {
      challenge: "The faculty lacked an interactive and centralized system to help students visualize anatomy structures effectively.",
      solution: "Designed and developed an interactive anatomy education platform integrating: QR-coded bones for instant access to 3D models and descriptions.",
      impact: [
        "Improved student engagement and understanding of anatomy by 40%.",
        "Enabled real-time progress tracking and personalized feedback."
      ]
    }
  },
  {
    id: 2,
    title: "Tech-Care: Eye-Controlled Wheelchair",
    summary: "Built AR-based virtual wheelchair control with eye-tracking technologies.",
    images: [
      "/images/5.jpg",
      "/images/6.jpg",
    ],
    tags: ["C#", "Unity", "AR", "OOP", "Eye-Tracking"],
    details: {
      challenge: "Paralyzed patients lacked independent mobility and needed a hands-free control system.",
      solution: "Built an eye-controlled wheelchair using eye-tracking and AR in Unity, allowing users to control a virtual prototype through gaze interaction.",
      impact: [
        "Improved patient independence and showcased innovation in assistive technology, earning recognition at ITC Egypt 2023.",
      ]
    }
  },

    {
    id: 3,
    title: "Lit-Nology Game",
    summary: "A smart, immersive platform that transforms novels into interactive simulations, letting users inhabit characters, experience their psychology, choices, and conflicts through dynamic dialogues, branching narratives, and AI-driven emotional feedback. Developed for Delta University - Faculty of Arts.",
    images: [
      "/images/7.jpg",
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/10.jpg",
    ],
    tags: ["C#", "Unity", "AR", "OOP", "Game Design"],
    details: {
      challenge: "Traditional reading offers limited interactivity and emotional engagement, making it hard for readers to deeply connect with multiple character perspectives.",
      solution: "Developed Lit-nology, an interactive system that transforms novels into immersive digital worlds.",
      impact: [
        "Redefined the reading experience by merging literary depth with smart technology, enabling users to explore literature dynamically and emotionally.",
        "Praised for its innovative blend of art, psychology, and human–computer interaction.",
      ]
    }
  },

      {
    id: 4,
    title: "Dhaleez",
    summary: "Dhaleez is an immersive narrative game where players navigate multiple character perspectives in a branching interactive world. The title combines visual-novel storytelling with behavioral simulation, enabling players to explore storylines through varying viewpoints and experience the ripple effects of their decisions across characters and plot.",
    images: [
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
    ],
    tags: ["C#", "Unity", "AR", "OOP", "Game Design"],
    details: {
      challenge: "Players often experience narrative games from a fixed perspective, limiting immersion and the depth of player choice in how the story unfolds.",
      solution: "Dhaleez transforms narrative gameplay by offering multiple character viewpoints, interactive environments and branching storylines where player decision-making deeply impacts the world. The game mixes visual novel mechanics with dynamic simulations of character behavior and psychological responses.",
      impact: [
        "The game offers a rich, replayable experience with high player engagement thanks to variable story paths and character arcs. It raises standards for indie narrative games by merging interactive storytelling with simulation depth.",
      ]
    }
  }
];
