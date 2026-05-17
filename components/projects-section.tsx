"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bell, Shield, Radio, BarChart3, ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Notify Service",
    subtitle: "High-Availability Notification Gateway",
    description:
      "Engineered a highly available notification gateway supporting 100,000+ concurrent users for mission-critical SMS and email alerts. Scaled the engine using Java, Spring Boot, Redis, and Kafka. Implemented automated failovers on Linux clusters and robust fallback channels, mitigating system downtime by 80% and ensuring near-zero message loss during peak loads.",
    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Linux", "High Availability"],
    icon: Bell,
    color: "text-[oklch(0.70_0.25_285)]",
    bg: "bg-[oklch(0.70_0.25_285/0.1)]",
    border: "border-[oklch(0.70_0.25_285/0.2)]",
    achievements: ["100K+ Users", "80% Less Downtime", "HA Engine"],
  },
  {
    title: "Enterprise API Gateway",
    subtitle: "Secure API Management Platform",
    description:
      "Architected a secure and reliable API Gateway serving as the single point of entry for 12+ third-party smart city vendors. Implemented robust OAuth 2.0 and JWT authentication, rate limiting, and request routing with Spring Boot and Docker. Conducted rigorous security audits reducing vulnerabilities by 45% while managing over 1 million monthly operations with 99.99% uptime.",
    technologies: ["Spring Boot", "OAuth 2.0", "JWT", "Docker", "SonarQube", "Security Audit"],
    icon: Shield,
    color: "text-[oklch(0.76_0.19_196)]",
    bg: "bg-[oklch(0.76_0.19_196/0.1)]",
    border: "border-[oklch(0.76_0.19_196/0.2)]",
    achievements: ["1M+ Operations/mo", "99.99% Reliability", "45% Vulnerability Drop"],
  },
  {
    title: "Industrial IoT Data Gateway",
    subtitle: "Real-Time Sensor Integration",
    description:
      "Developed an edge-based Industrial IoT Data Gateway using Node-RED to stream telemetry from 10,000+ active field sensors and devices. Integrated Modbus TCP, OPC UA, BACnet, and MQTT protocols for bidirectional secure communication. Decreased telemetry latency by 30% and slashed cloud database ingestion costs by 20% using edge intelligent data filtering.",
    technologies: ["Node-RED", "Modbus TCP", "OPC UA", "BACnet", "MQTT", "Telemetry"],
    icon: Radio,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    achievements: ["10K+ Edge Devices", "30% Latency Drop", "20% Cloud Savings"],
  },
  {
    title: "Digital Twinning & Analytics",
    subtitle: "R&D: Real-Time Analytics Platform",
    description:
      "Pioneered a real-time digital twinning dashboard for smart city infrastructure with WebSockets, Angular, and PostgreSQL. Built dynamic, interactive analytics pipelines via Apache NiFi and Kafka Streams to track resource allocation. Improved data accuracy by 25%, reduced emergency response times by 25%, and boosted core server performance by 20%.",
    technologies: ["Angular", "WebSockets", "PostgreSQL", "Apache NiFi", "Kafka Streams"],
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    achievements: ["20% Performance Boost", "25% Faster Response", "Zero Downtime"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[oklch(0.76_0.19_196/0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-3 mb-16">
            <div>
              <span className="section-label">04. Engineering Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mt-2 leading-relaxed">
              An in-depth showcase of the core enterprise platforms, high-throughput IoT operations, and resilient IoT production networks engineered during my tenure at <span className="text-foreground font-semibold">Trinity Mobility Private Ltd</span>, powering modern multi-city command and control infrastructures.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative"
                >
                  {/* Card Container with custom boarders */}
                  <div className="glass-card rounded-2xl p-6 md:p-8 h-full border-gradient shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300 card-lift">
                    
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${project.bg} ${project.color} ${project.border} border`}>
                          <Icon size={24} />
                        </div>
                        
                        {/* Links */}
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-colors border border-transparent hover:border-primary/10"
                            aria-label="View Project on GitHub"
                          >
                            <Github size={18} />
                          </button>
                          <button
                            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/8 transition-colors border border-transparent hover:border-primary/10"
                            aria-label="View Project Demo"
                          >
                            <ArrowUpRight size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Content Titles */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary/80 mt-0.5 tracking-wider uppercase">
                        {project.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Achievements tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-2.5 py-1 text-[11px] rounded-lg bg-primary/8 border border-primary/15 text-primary font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-muted-foreground"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
