interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  currentUni: boolean;
}

const education: Education[] = [
  {
    title: "Master of Science in Computer Graphics and Video Games",
    startDate: "2022-09-01",
    endDate: "2024-06-30",
    school: "University of Montpellier",
    location: "Montpellier, France",
    description: "",
    currentUni: false
  },
  {
    title: "Bachelor of Science in Computer Science",
    startDate: "2018-09-01",
    endDate: "2022-06-30",
    school: "University of Poiters",
    location: "Poitiers, France",
    description: "",
    currentUni: false
  }
];

export default education;
