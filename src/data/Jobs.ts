/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
  {
    title: "3D Developer",
    startDate: "2024-11-25",
    company: "Akkodis",
    location: "Bordeaux, France",
    description:
      "Developed a 2D web viewer and a C++ server for vizualising high-resolution images",
    goals: [
      "Developed a 2D web viewer and a C++ server for vizualising high-resolution images",
      "Technologies : OpenSeadragon, Drogon, WebGL, IIIF Protocol",
      "Languages: Typescript, C++, GLSL"
    ],
    currentJob: true
  },
  {
    title: "Unreal 3D developer internship",
    startDate: "2024-01-10",
    endDate: "2024-08-10",
    company: "Corys",
    location: "Grenoble, Bodeaux",
    description: "Developed and maintained an application in Unreal 5",
    goals: [
      "3D development for procedural building generation using Unreal Engine 5",
      "Technologies : Unreal Engine 5, Geometry Script, Perforce",
      "Languages: C++"
    ],
    currentJob: false
  },
  {
    title: "Godot 3D developer summer internship",
    startDate: "2023-06-10",
    endDate: "2023-08-10",
    company: "Computer Graphics Lab",
    location: "Sherbrooke, Canada",
    description: "Developed and maintained an application in Godot",
    goals: [
      "3D development to implement a real-time by examplar texture synthesis algorithm in Godot",
      "Technologies : Godot",
      "Languages: C++, GLSL"
    ],
    currentJob: false
  }
];
export default workExperience;
