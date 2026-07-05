import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'CARTEIRA PJ — Full-Stack Next.js App',
    description: 'A full-stack application for managing PJ (Pessoa Jurídica) portfolios, built with Next.js, React, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/SERDOTTE/CARTEIRA_PJ/tree/main/components'
  },
  {
    title: 'CleanNest — Mattress & Upholstery Cleaning Services',
    description: 'A React app for managing cleaning service bookings.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/SERDOTTE/cleanest-finalproject'
  },
  {
    title: 'UDEMY - Programming Algorithms',
    description: 'A collection of programming algorithms implemented in JavaScript.',
    technologies: ['JavaScript', 'Algorithms', 'Data Structures'],
    link: 'https://github.com/SERDOTTE/UDEMY---ALGORITIMO-DE-PROGRAMACAO'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
