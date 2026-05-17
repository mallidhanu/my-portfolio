"use client"

import { motion, Variants } from "framer-motion"
import { Download, Mail, Linkedin, Github } from "lucide-react"
import { useEffect, useState } from "react"

const roles = [
  "Full Stack Developer",
  "Java & Spring Boot Expert",
  "IoT Systems Architect",
  "API Gateway Engineer",
]

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, texts])

  return (
    <span className="text-gradient-primary">
      {displayText}
      <span className="animate-blink text-[oklch(0.76_0.19_196)]">|</span>
    </span>
  )
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial orbs centered behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.70_0.25_285/0.12)] blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[oklch(0.76_0.19_196/0.10)] blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2.5s" }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center justify-center min-h-[80vh]">

        {/* Centered Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex items-center justify-center gap-3">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Madiga </span>
              <span className="text-gradient-primary glow-text">Mallikarjuna</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div variants={item} className="text-xl md:text-2xl font-medium h-8 flex items-center justify-center">
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Performance-driven developer with{" "}
            <span className="text-foreground font-semibold">3+ years</span> building Smart City &
            IoT enterprise systems. Architecting scalable APIs, real-time data pipelines, and
            securing infrastructure for{" "}
            <span className="text-[oklch(0.76_0.19_196)] font-semibold">1M+ monthly operations</span>.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-8 py-2">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "1M+", label: "Monthly Ops." },
              { value: "99.99%", label: "Reliability" },
              { value: "10K+", label: "Edge Devices" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a href="/resume.pdf" download className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Find me on</span>
            <div className="flex gap-2">
              {[
                { href: "https://linkedin.com/in/madiga-mallikarjuna2377b8243", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/mallidhanu", icon: Github, label: "GitHub" },
                { href: "mailto:mallikarjuna16y@gmail.com", icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 border border-transparent"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>


    </section>
  )
}
