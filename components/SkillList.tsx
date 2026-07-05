import SkillCard from "./SkillCard";

interface Skill {
  name: string;
  description: string;
  icon: string;
}

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
