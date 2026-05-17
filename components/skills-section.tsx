"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "JavaScript", "TypeScript", "Spring Boot", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    skills: ["Hibernate", "JPA", "REST APIs", "OAuth 2.0", "JWT", "Node-RED", "Apache NiFi"],
  },
  {
    title: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "Redis", "PouchDB"],
  },
  {
    title: "IoT & Protocols",
    skills: ["Modbus TCP", "OPC UA", "BACnet", "MQTT", "IoT Hub", "WebSockets", "Kafka Streams"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Jenkins CI/CD", "Maven", "SVN", "Linux", "SonarQube", "JUnit Testing"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full" />

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
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "1M+", label: "Monthly Operations" },
              { value: "99.99%", label: "System Reliability" },
              { value: "10K+", label: "Edge Devices" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
