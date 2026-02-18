"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-[#101e23] border border-white/5 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
      <div
        className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
      </div>
      <div className="p-6 grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
              open_in_new
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "The BucktList",
      description:
        "Collaborative task management platform with real-time updates using Server-Side Events and secure authentication.",
      tags: ["React", "NestJS", "MongoDB", "Google SSO"],
      link: "https://thebucktlist.com",
      image: "/projects/bucktlist.png",
    },
    {
      title: "Project Manuscript",
      description:
        "A platform for writers to write and publish their stories and blogs.",
      tags: ["React", "NodeJS", "MongoDB", "JWT"],
      image: "/projects/manuscript.png",
      link: "https://manuscript-client.vercel.app",
    },
    {
      title: "ESP 8266 Connection Framework",
      description:
        "A small framework to demonstrate a stable real-time connection between ESP 8266 and a Node.js server.",
      tags: ["C++", "Platform IO", "WebSocket", "Node.js"],
      image: "/projects/esp8266.png",
      link: "https://github.com/Soumyajit2000-web/Node_mcu_esp8266_websockets",
    },
  ];

  return (
    <section id="work" className="py-20 border-t border-white/5 bg-[#080c0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Selected Works
              </h2>
              <p className="text-gray-400">
                A glimpse into my recent development projects.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              width="100%"
              className="h-full"
            >
              <div className="h-full">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="block h-full"
                  >
                    <ProjectCard project={project} />
                  </Link>
                ) : (
                  <ProjectCard project={project} />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* <div className="mt-8 text-center sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all projects{" "}
            <span className="material-symbols-outlined text-sm ml-1">
              arrow_outward
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
