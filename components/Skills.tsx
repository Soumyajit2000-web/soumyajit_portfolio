"use client";

import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const skills = [
    {
      icon: "code",
      title: "Frontend",
      description:
        "React.js, Next.js, Angular, TypeScript, Tailwind CSS, Material-UI, Redux",
    },
    {
      icon: "dns",
      title: "Backend",
      description: "Node.js, Express.js, Nest.js, RESTful APIs, JWT",
    },
    {
      icon: "build",
      title: "Tools",
      description: "Git, GitHub, VS Code, Web Performance Optimization",
    },
    {
      icon: "settings",
      title: "Methodologies",
      description: "Agile/Scrum, SDLC, Responsive Design",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#101e23] via-background-dark to-background-dark opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="mx-auto">
          <div className="flex flex-col gap-4 mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white">
              Technical Proficiency
            </h2>
            <p className="text-gray-400">
              A comprehensive toolbelt for modern web development.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction="up"
              width="100%"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#0a0f12] border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 h-full">
                <div className="p-3 rounded-full bg-[#101e23] text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {skill.icon}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">
                    {skill.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
