"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[oklch(0.70_0.25_285/0.04)] rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] dot-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-3 mb-16">
            <div>
              <span className="section-label">05. Education Background</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Academic <span className="text-gradient-primary">Foundation</span>
            </h2>
          </div>

          {/* Education & Certifications List */}
          <div className="flex flex-col gap-8">
            {/* JSpiders Professional Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-10 border-gradient shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Visual corner decoration */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-mono text-primary bg-primary/8 border border-primary/20 px-2.5 py-1 rounded-lg">
                <Sparkles size={11} className="animate-pulse" />
                Professional Course
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Glowing Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 text-primary shadow-[0_0_15px_oklch(0.70_0.25_285/0.2)]">
                  <GraduationCap size={32} />
                </div>

                {/* Content metadata */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Java Full Stack Development
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Professional Development Certification
                  </p>
                  
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-muted-foreground text-sm font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      <span>JSpiders</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional certification context */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                  Completed an intensive, hands-on professional course specializing in end-to-end full-stack software development. 
                  Mastered advanced Java Core, Spring Framework, Spring Boot, Hibernate/JPA, relational databases, JavaScript paradigms, 
                  and web application building blocks.
                </p>
              </div>
            </motion.div>

            {/* B.Tech Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 md:p-10 border-gradient shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Visual corner decoration */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-mono text-primary bg-primary/8 border border-primary/20 px-2.5 py-1 rounded-lg">
                <Sparkles size={11} className="animate-pulse" />
                Verified Degree
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Glowing Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 text-primary shadow-[0_0_15px_oklch(0.70_0.25_285/0.2)]">
                  <GraduationCap size={32} />
                </div>

                {/* Content metadata */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Bachelor of Technology
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Electronics & Communication Engineering
                  </p>
                  
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-muted-foreground text-sm font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      <span>JNTU Anantapur</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      <span>June 2016 – September 2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional engineering context */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                  Acquired a rigorous academic foundation spanning engineering mathematics, electronic circuit systems, 
                  signals processing, and programming logic. Developed specialized competencies in microcontrollers, 
                  real-time embedded systems, and object-oriented software engineering, culminating in a natural transition 
                  to modern full-stack web and high-availability enterprise system architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
