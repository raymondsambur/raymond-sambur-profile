"use client";

import { Building2, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Development Engineer in Test",
    company: "DANA Indonesia",
    companyDescription:
      "Indonesia's leading digital wallet and payment platform, serving tens of millions of users with mission-critical financial services across payments, transfers, and digital banking.",
    period: "Mar 2020 – Dec 2025",
    location: "Jakarta, Indonesia",
    highlights: [
      "Spearheaded adoption of a new web automation framework, improving scalability across web teams",
      "Optimized release velocity with parallel test execution in CI/CD pipelines, significantly reducing feedback loops",
      "Developed standardized test-case management workflow using mindmaps, flowcharts, and feature plans",
      "Orchestrated end-to-end defect resolution and regression cycles for mission-critical financial services",
      "Mentored engineers on automation design patterns, code quality, and internal testing tools",
    ],
  },
  {
    role: "Junior System Analyst",
    company: "CLS System",
    companyDescription:
      "A technology solutions company focused on enterprise system development, business process optimization, and digital transformation for corporate clients.",
    period: "Aug 2019 – Mar 2020",
    location: "Jakarta, Indonesia",
    highlights: [
      "Conducted in-depth analysis of system flows to identify optimization opportunities and document business logic",
      "Designed structured business workflows and technical documentation bridging stakeholders and dev teams",
      "Developed comprehensive reports, flowcharts, and detailed requirement specifications",
      "Collaborated with cross-functional teams to align system flows across the project lifecycle",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              className="relative pl-14 md:pl-16 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500/10 border-2 border-indigo-500/60 flex items-center justify-center backdrop-blur-sm">
                <Building2 size={16} className="text-indigo-400" />
              </div>

              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 hover:border-indigo-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-slate-100">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm font-semibold text-indigo-400 mb-1">
                  {exp.company}
                  <span className="text-slate-500 font-normal">
                    {" "}— {exp.location}
                  </span>
                </p>
                <p className="text-sm text-slate-500 italic mb-5 leading-relaxed">
                  {exp.companyDescription}
                </p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-400 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
            Education
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  Bachelor of Computer Science in Information Systems
                </h4>
                <p className="text-sm text-indigo-400 font-medium">
                  Klabat University
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  2015 – 2018 &bull; North Sulawesi, Indonesia
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
