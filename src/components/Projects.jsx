import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  // Data from CV
  const projects = [
    {
      title: "Edux",
      description:
        "Collaborative Academic Resource Platform helping students share and access academic resources easily.",
      tags: ["Full-Stack", "Web Platform", "Real-time"],
      github: "https://github.com/amrfoqha/Edux",
      demo: "#",
    },
    {
      title: "Cookly",
      description:
        "Smart Recipe Recommendation Platform using generic ingredient matching and AI-assisted generation.",
      tags: ["Spring Boot", "MySQL", "React", "AI"],
      github: "https://github.com/amrfoqha/Java-Project",
      demo: "#",
    },
    {
      title: "CareerPilot",
      description:
        "AI-Based Career Guidance System analyzing CVs and skills for personalized recommendations.",
      tags: ["Django", "Python", "AI", "Chart.js"],
      github: "https://github.com/amrfoqha/python-project",
      demo: "#",
    },
    {
      title: "Friend Motors",
      description:
        "Web platform for selling and exchanging vehicles with comprehensive flow for browsing and posting.",
      tags: ["PHP", "Bootstrap", "MySQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            Highlights of my technical journey and problem-solving experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
