import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const education = [
    {
      school: "Axsos Academy",
      degree: "Full Stack Developer Bootcamp",
      date: "2025",
      desc: "Immersive training in Python, Java, and MERN stack. 1200+ coding hours, algorithms, and 3 complete projects.",
    },
    {
      school: "An-Najah National University",
      degree: "Bachelor of Computer Engineering",
      date: "2019 - 2024",
      desc: "Strong foundation in software engineering, OOP, databases, and computer systems.",
    },
    {
      school: "Udemy",
      degree: "The Ultimate React Course",
      date: "2025",
      desc: "Deep dive into React, Next.js, Redux, and Tailwind CSS.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900 last:border-0"
            >
              {/* Dot */}
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    {item.school}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {item.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
