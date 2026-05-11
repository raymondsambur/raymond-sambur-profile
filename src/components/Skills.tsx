"use client";

import {
  Monitor,
  Code2,
  Globe,
  Container,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

/* ============================================
   SKILLS DATA
   ============================================ */
const skillCategories = [
  {
    icon: Monitor,
    category: "Testing Frameworks",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20",
    skills: [
      "WebDriverIO",
      "TestCafe",
      "Appium",
      "Playwright",
      "Cucumber (BDD)",
      "Selenium WebDriver",
    ],
  },
  {
    icon: Code2,
    category: "Languages",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
    skills: ["JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    icon: Globe,
    category: "API Testing",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    skills: ["REST Assured", "Postman", "Playwright API"],
  },
  {
    icon: Container,
    category: "DevOps & CI/CD",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    skills: ["Jenkins", "GitLab CI", "Docker", "GitHub Actions"],
  },
  {
    icon: Wrench,
    category: "Tools & Methodology",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/20",
    skills: [
      "JIRA",
      "TestRail",
      "Notion",
      "Agile/Scrum",
      "Mobile Testing",
      "Web Testing",
      "Mindmaps & Flowcharts",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-text-secondary max-w-lg mx-auto">
            A diverse toolkit built over 5+ years of hands-on quality
            engineering in high-scale environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="group bg-surface-light rounded-2xl border border-border p-7 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl ${cat.bgColor} ${cat.borderColor} border flex items-center justify-center`}
                >
                  <cat.icon size={20} className={cat.color} />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {cat.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3.5 py-2 text-sm font-medium text-text-secondary bg-surface rounded-xl border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
