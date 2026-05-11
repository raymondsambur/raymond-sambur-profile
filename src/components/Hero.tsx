"use client";

import { useEffect, useRef, useCallback } from "react";
import { Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const basePath =
  process.env.NODE_ENV === "production" ? "/raymond-sambur-profile" : "";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLAnchorElement>(null);
  const mousePosRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;
    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    const rect = targetRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;

    const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
    const opacity = Math.min(
      0.5,
      (r - Math.max(rect.width, rect.height) / 2) / 600
    );

    if (opacity <= 0) return;

    ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
    ctx.lineWidth = 1.5;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([8, 5]);
    ctx.stroke();
    ctx.restore();

    // Arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 10;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateCanvasSize();

    const animateLoop = () => {
      if (ctxRef.current && canvas) {
        ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };
    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_rgba(99,102,241,0.08)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content — centered layout */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Photo — centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 blur-2xl scale-150" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-indigo-400/30 shadow-2xl shadow-indigo-500/20">
            <img
              src={`${basePath}/profile.png`}
              alt="Raymond Jhonathan Sambur"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-indigo-300 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm"
        >
          Senior SDET &bull; Quality Engineering
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 leading-[1.1] mb-4"
        >
          Raymond Jhonathan{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
            Sambur
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          Building bulletproof software through intelligent automation.
          <br className="hidden sm:block" />
          Architecting test frameworks that scale with{" "}
          <span className="text-indigo-300 font-medium">
            high-velocity fintech systems
          </span>
          .
        </motion.p>

        {/* CTA Buttons — arrow target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            ref={targetRef}
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
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
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-300 font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center gap-8 sm:gap-12"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-100">5+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
              Years Exp
            </p>
          </div>
          <div className="w-px h-10 bg-slate-800" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-100">
              FinTech
            </p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
              Domain
            </p>
          </div>
          <div className="w-px h-10 bg-slate-800" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-100">AI</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
              Powered
            </p>
          </div>
        </motion.div>
      </div>

      {/* Cursor arrow canvas — desktop only */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[60] hidden lg:block"
      />
    </section>
  );
}
