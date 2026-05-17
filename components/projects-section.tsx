"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bell, Shield, Radio, BarChart3, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Notify Service",
    subtitle: "High-Availability Notification Gateway",
    description:
      "Scaled a performance-driven notification engine supporting 100,000+ users for mission-critical SMS and email alerts with 80% reduction in system downtime.",
    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Linux"],
    icon: Bell,
    achievements: ["100K+ Users", "80% Less Downtime", "High Availability"],
  },
  {
    title: "Enterprise API Gateway",
    subtitle: "Secure API Management Platform",
    description:
      "Architected a secure API Gateway serving as the single point of contact for 12+ third-party Smart City vendors with OAuth 2.0 and JWT authentication.",
    technologies: ["Spring Boot", "OAuth 2.0", "JWT", "Docker", "SonarQube"],
    icon: Shield,
    achievements: ["1M+ Operations/mo", "99.99% Reliability", "45% Fewer Vulnerabilities"],
  },
  {
    title: "Industrial IoT Data Gateway",
    subtitle: "Real-Time Sensor Integration",
    description:
      "Developed a Node-RED data gateway enabling real-time synchronization between industrial sensors and cloud backends with bidirectional communication.",
    technologies: ["Node-RED", "Modbus TCP", "OPC UA", "BACnet", "MQTT"],
    icon: Radio,
    achievements: ["10K+ Edge Devices", "30% Less Latency", "20% Cost Savings"],
  },
  {
    title: "Digital Twinning & Analytics",
    subtitle: "R&D: Real-Time Analytics Platform",
    description:
      "Pioneered a digital twinning solution with real-time tracking dashboard, improving resource allocation accuracy and reducing emergency response times.",
    technologies: ["Angular", "WebSockets", "PostgreSQL", "Apache NiFi", "Kafka Streams"],
    icon: BarChart3,
    achievements: ["20% Performance Boost", "25% Faster Response", "Zero Downtime"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="glass-strong rounded-2xl p-8 h-full hover:bg-primary/5 transition-all duration-500 hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="text-primary" size={28} />
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </button>
                      <button
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-pretty">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
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
