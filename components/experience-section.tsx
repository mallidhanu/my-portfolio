"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Trinity Mobility Private Ltd",
    description: "Trinity Mobility is an industry-leading provider of smart city solutions, delivering Integrated Command & Control Centers (ICCC), IoT middleware platforms, and real-time visualization dashboards that power modern secure urban infrastructure. The company specializes in large-scale IoT operations and high-throughput IoT production networks, orchestrating edge device fleets, standardizing industrial telemetry protocol pipelines, and managing continuous, high-availability data integrations for complex metropolitan ecosystems.",
    location: "Bengaluru, India",
    period: "Mar 2022 – Apr 2025",
    highlights: [
      {
        project: "Notify Service – High-Availability Notification Gateway",
        achievements: [
          "Scaled a robust, mission-critical notification backend processing over 50,000 requests per minute with zero message loss under peak loads.",
          "Designed multi-channel SMS & Email gateway fallbacks with active-active redundant servers, mitigating downtime by 80% through automated Linux failover scripts.",
          "Integrated Kafka logging pipelines and Prometheus monitoring to track delivery times and system loads, providing real-time diagnostics.",
        ],
      },
      {
        project: "Enterprise API Gateway",
        achievements: [
          "Architected a centralized API Gateway serving as the secure entry point for 12+ external Smart City vendors and service providers.",
          "Formulated Spring Boot gateway layers with custom OAuth 2.0 / JWT middleware, rate-limiting rules, and IP whitelisting to protect core networks.",
          "Achieved a 45% reduction in production vulnerability scores through comprehensive security auditing, Jenkins CI/CD integration, and SonarQube quality gates.",
          "Successfully managed over 1 million monthly operations with a proven track record of 99.99% system availability.",
        ],
      },
      {
        project: "Industrial IoT Data Gateway",
        achievements: [
          "Developed high-throughput Node-RED edge data gateways to bridge telemetric data streams from over 10,000 field IoT devices and industrial controllers.",
          "Configured communication protocols like Modbus TCP, OPC UA, BACnet, and MQTT to standardize telemetry streams from edge sensors.",
          "Engineered client-side queue buffers and intelligent JSON data filtering, saving 20% in database ingestion costs while reducing latency by 30%.",
        ],
      },
      {
        project: "Digital Twinning & Real-Time Analytics",
        achievements: [
          "Pioneered high-performance real-time telemetry processing products, boosting server rendering and peak load capacity by 20%.",
          "Built interactive, real-time Angular visualization dashboards utilizing WebSockets for live GPS-based vehicle and sensor tracking.",
          "Constructed Apache NiFi streaming pipelines connected to Kafka Streams to automate warning alarm dispatches, cutting emergency response times by 25%.",
        ],
      },
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[oklch(0.76_0.19_196/0.05)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] grid-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col gap-3 mb-16">
            <div>
              <span className="section-label">02. Career Timeline</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Professional <span className="text-gradient-primary">Journey</span>
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline track line */}
            <div className="absolute left-4 md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary-mid/40 to-transparent" />

            {experiences.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: expIndex * 0.2 }}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-4 md:left-8 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_oklch(0.70_0.25_285/0.8)] border-2 border-background z-10" />

                {/* Content Box */}
                <div className="glass-card rounded-2xl p-6 md:p-8 border-gradient shadow-xl hover:shadow-2xl transition-all duration-300">
                  
                  {/* Job metadata */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-6 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <span className="text-primary font-semibold flex items-center gap-1.5">
                          <Building2 size={14} />
                          {exp.company}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/8 border border-primary/20 text-primary font-mono text-xs font-semibold">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Company Description */}
                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic bg-white/[0.01] border border-white/[0.04] p-4 rounded-xl">
                      {exp.description}
                    </p>
                  )}

                  {/* Highlights and Achievements */}
                  <div className="space-y-8">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <h4 className="text-md md:text-lg font-bold text-foreground mb-3 flex items-start gap-2.5 group-hover/item:text-primary transition-colors">
                          <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span>{item.project}</span>
                        </h4>
                        
                        <ul className="space-y-3.5 pl-6 md:pl-7">
                          {item.achievements.map((ach, achIdx) => (
                            <li
                              key={achIdx}
                              className="text-muted-foreground text-sm leading-relaxed relative before:content-[''] before:absolute before:-left-4 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary-mid/60"
                            >
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
