"use client";

import { Building2, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

/* ============================================
   WORK EXPERIENCE DATA
   ============================================ */
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
    <section id="experience" className="py-24 bg-surface-light">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              className="relative pl-14 md:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border-2 border-primary/60 flex items-center justify-center backdrop-blur-sm">
                <Building2 size={16} className="text-primary" />
              </div>

              {/* Card */}
              <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Role & Period */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-text-primary">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-muted bg-surface-light px-3 py-1.5 rounded-full border border-border shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <p className="text-sm font-semibold text-primary mb-1">
                  {exp.company}
                  <span className="text-text-muted font-normal">
                    {" "}
                    — {exp.location}
                  </span>
                </p>
                <p className="text-sm text-text-muted italic mb-5 leading-relaxed">
                  {exp.companyDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-secondary flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education - Separate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Education
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-5 bg-surface rounded-2xl border border-border p-6 md:p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary">
                  Bachelor of Computer Science in Information Systems
                </h4>
                <p className="text-sm text-primary font-medium">
                  Klabat University
                </p>
                <p className="text-xs text-text-muted mt-1">
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
