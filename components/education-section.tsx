"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-strong rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={40} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
                <p className="text-lg text-primary mb-4">Electronics & Communication Engineering</p>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>JNTU Kakinada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>June 2016 – September 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Completed a comprehensive engineering program with a strong foundation in electronics, 
                communication systems, and programming. Developed skills in embedded systems, signal processing, 
                and software development that later transitioned into full-stack web development expertise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
