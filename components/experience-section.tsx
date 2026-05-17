"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Trinity Mobility Private Ltd",
    location: "Bengaluru",
    period: "Mar 2022 – Apr 2025",
    highlights: [
      {
        project: "Notify Service – High-Availability Notification Gateway",
        achievements: [
          "Scaled a notification engine supporting 100,000+ users for SMS and email alerts",
          "Mitigated system downtime by 80% through high-availability frameworks and Linux-based automated failovers",
        ],
      },
      {
        project: "Enterprise API Gateway",
        achievements: [
          "Formulated a secure API Gateway using Spring Boot with OAuth 2.0 and JWT authentication",
          "Achieved 45% reduction in vulnerabilities through robust security protocols",
          "Reduced integration time by 60% for Smart City vendors",
          "Managed 1M+ monthly operations with 99.99% reliability",
        ],
      },
      {
        project: "Industrial IoT Data Gateway",
        achievements: [
          "Developed a Node-RED data gateway decreasing end-to-end latency by 30%",
          "Integrated Modbus TCP, OPC UA, and BACnet for 10,000+ edge devices",
          "Reduced cloud storage costs by 20% through edge-level data filtering",
        ],
      },
      {
        project: "R&D: Digital Twinning & Real-Time Analytics",
        achievements: [
          "Pioneered product design boosting system performance by 20%",
          "Improved resource allocation accuracy by 25% with real-time tracking dashboard",
          "Reduced emergency response times by 25% through automated dispatch workflows",
        ],
      },
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: expIndex * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />

                {/* Company Header */}
                <div className="glass-strong rounded-2xl p-6 md:p-8 mb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Building2 size={16} />
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">• {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + hIndex * 0.1 }}
                        className="group"
                      >
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <ChevronRight className="text-primary" size={18} />
                          {highlight.project}
                        </h4>
                        <ul className="space-y-2 pl-6">
                          {highlight.achievements.map((achievement, aIndex) => (
                            <li
                              key={aIndex}
                              className="text-muted-foreground text-sm leading-relaxed relative before:content-['▹'] before:text-primary before:absolute before:-left-4 before:top-0"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
