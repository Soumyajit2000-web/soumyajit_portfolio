"use client";

import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Freelance Software Developer",
    company: "Self Employed",
    period: "May 2024 - Present",
    description:
      "Building custom web applications and digital solutions for diverse clients. Specializing in full-stack development using Next.js, Node.js, and modern cloud technologies.",
    tag: "Current Role",
  },
  {
    title: "Software Engineer",
    company: "SigiloTech Pvt. Ltd.",
    period: "May 2022 - May 2025",
    description:
      "Designed and implemented robust, scalable web solutions using React.js and Node.js. Led the development of a management system with 99.9% uptime. Mentored junior developers and ensured seamless API integration between frontend and backend.",
    tag: "Full Time Role",
  },
  {
    title: "Software Developer Intern",
    company: "SigiloTech Pvt. Ltd.",
    period: "Dec 2021 - Apr 2022",
    description:
      "Developed reusable UI components with React.js and Material-UI. Designed responsive web pages achieving 100% mobile responsiveness. Optimized frontend performance resulting in a 40% load time improvement.",
    tag: "Internship",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="py-20 bg-[#080c0e] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal className="mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-400">
              The path I&apos;ve traveled to master my craft.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Continuous Line */}
          <div className="absolute left-4 md:left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start gap-8">
                {/* Dot */}
                <div className="absolute left-4 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-[#101e23] border-2 border-primary shadow-[0_0_10px_rgba(13,185,242,0.4)] z-20"></div>

                {/* Content */}
                <div className="pl-12 md:pl-16 flex-1">
                  <ScrollReveal
                    direction="left"
                    delay={index * 0.1}
                    width="100%"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="inline-block px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-bold whitespace-nowrap">
                          {exp.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
