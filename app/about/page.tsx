import SkillList from '@/components/SkillList';
const skills = [
  {
    name: 'JavaScript',
    description: 'Proficient in JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    description: 'Experienced in building dynamic and responsive user interfaces using React, including hooks and state management.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'    
  },
  {
    name: 'Next.js',
    description: 'Skilled in developing server-side rendered applications and static websites using Next.js.',  
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'TypeScript',
    description: 'Familiar with TypeScript for adding static types to JavaScript, improving code quality and maintainability.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' 
  },
  {
    name: 'Tailwind CSS',
    description: 'Experienced in using Tailwind CSS for rapid UI development with utility-first CSS classes.',
    icon: 'https://play-lh.googleusercontent.com/dJD0n5utlxgJHK9UgnsqED6kmrYfzv9JwJXNFbzGumyX_q9EYnOyVjYotg3iVLjiojk-Ude0865kFy11wcPEHg=w240-h480-rw' 
  }
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Software Developer proficient in today is leading technologies and frameworks, 
          focused on building efficient, scalable, and high-quality digital solutions.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Beyond writing clean code, I possess the ability to work effectively and 
          collaborate actively within multidisciplinary teams.
        </p>
        <h3 className="text-2xl text-center font-bold mt-8">Here are the key technical skills:</h3>
      </section>
      <SkillList skills={skills} />
    </main>
  );
}

