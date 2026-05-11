"use client";

import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const basePath = process.env.NODE_ENV === "production" ? "/raymond-sambur-profile" : "";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatingVariants2 = {
  animate: {
    y: [0, 12, 0],
    x: [0, -8, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-surface-light)_0%,_var(--color-surface)_70%)]" />

      {/* Floating orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-[10%] w-72 h-72 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-1/3 right-[10%] w-96 h-96 bg-accent/6 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-2/3 left-[30%] w-48 h-48 bg-primary/5 rounded-full blur-2xl"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content - left side */}
          <div className="text-center lg:text-left flex-1">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-wider uppercase text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
            >
              Senior SDET &bull; Quality Engineering
            </motion.span>

            {/* Name with staggered letter animation */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-[1.1] mb-6"
            >
              <span className="block">Raymond Jhonathan</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent"
              >
                Sambur
              </motion.span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building bulletproof software through intelligent automation.
              <br className="hidden sm:block" />
              Architecting test frameworks that scale with{" "}
              <span className="text-primary font-medium">
                high-velocity fintech systems
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Briefcase size={18} />
                View My Work
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-surface-lighter hover:border-primary/50 text-text-secondary hover:text-primary font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Profile Photo - right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative shrink-0"
          >
            {/* Glow ring behind photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl scale-110" />
            {/* Photo container — circular clip removes the black background */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              {/* TODO: Make sure profile.png is saved in /public/ */}
              <img
                src={`${basePath}/profile.png`}
                alt="Raymond Jhonathan Sambur"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse" />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-text-primary">
              5+
            </p>
            <p className="text-xs text-text-muted uppercase tracking-wider mt-1">
              Years Exp
            </p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-text-primary">
              FinTech
            </p>
            <p className="text-xs text-text-muted uppercase tracking-wider mt-1">
              Domain
            </p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-text-primary">
              AI
            </p>
            <p className="text-xs text-text-muted uppercase tracking-wider mt-1">
              Powered
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-text-muted">
            Scroll
          </span>
          <ArrowDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
