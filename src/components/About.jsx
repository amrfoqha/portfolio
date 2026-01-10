import React from "react";
import { motion } from "framer-motion";
import Avatar from "../../uploads/avatar.jpg";
import CV from "../../uploads/CV.pdf";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-gray-800 overflow-hidden border border-gray-700">
                {/* Replace this with actual image */}
                {/* <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
                  <span className="text-6xl max-w-[80%] text-center">
                    Avatar Placeholder
                  </span>
                </div> */}
                <img src={Avatar} alt="Amr Foqha" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionate about creating modern web solutions
              </h3>

              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  I am a Computer Engineering graduate from An-Najah National
                  University and a Full-Stack Developer with hands-on experience
                  in building real-world web applications.
                </p>
                <p>
                  My expertise spans both front-end and back-end development,
                  using technologies like React, Spring Boot, Django, and more.
                  I have contributed to AI-powered projects such as CareerPilot
                  and Cookly, focusing on solving practical problems.
                </p>
                <p>
                  I am highly motivated, adaptable, and eager to grow within a
                  professional team environment, always staying up-to-date with
                  the latest industry trends.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={CV}
                  download
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center gap-2 group"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
