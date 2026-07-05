interface SkillCardProps {
  skill: {
    name: string;
    description: string;
    icon: string;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-green-100 rounded-lg shadow-md p-6">
      <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
      <h4 className="text-xl text-center font-bold mb-2">{skill.name}</h4>
      <p className="text-gray-700 text-center">{skill.description}</p>
    </div>
  );
}