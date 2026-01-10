import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Use EmailJS with environment variables
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset(); // reset form fields
          setTimeout(() => setStatus(""), 3000); // clear status after 3s
        },
        (error) => {
          console.error("Email send error:", error.text);
          setStatus("error");
          setTimeout(() => setStatus(""), 3000); // clear status after 3s
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-400">
              I am currently available for freelance work or full-time
              opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+972 59-459-5311</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:amr.mofeed.foqha9@gmail.com"
                    className="font-medium hover:text-blue-400 transition-colors"
                  >
                    amr.mofeed.foqha9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Palestine</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name" // must match EmailJS template {{name}}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                  placeholder="Amr Foqha"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email" // optional: if template expects {{user_email}}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white"
                  placeholder="amr@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message" // must match EmailJS template {{message}}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white resize-none"
                  placeholder="I have a project idea..."
                ></textarea>
              </div>

              {/* Hidden field for timestamp */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent!"
                ) : status === "error" ? (
                  "Error! Try Again"
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
