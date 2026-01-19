import { ExperienceCard } from "../ui";
import experienceData from "../../data/experience.json";

/**
 * Experience - Displays work experience timeline
 * Renders experience cards with hover effects
 */
const Experience = () => {
  return (
    <ol className="group/list py-16 lg:col-span-3 lg:py-0">
      {experienceData.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </ol>
  );
};

export default Experience;
