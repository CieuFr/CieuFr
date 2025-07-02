interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "C++",
    description: "I started using C++ 7 years ago and haven't stopped since",
    icon: "cpp"
  },
  {
    name: "OpenGL",
    description: "I made 2 project renderers using OpenGL",
    icon: "glsl"
  },
  {
    name: "Unreal",
    description:
      "I used Unreal for my end of studies internship so I gained a lot of experience on it",
    icon: "unreal"
  },
  {
    name: "Godot",
    description:
      "I have used Godot in my summer internship but also for several game jams",
    icon: "godot"
  }
];

export default hardSkills;
