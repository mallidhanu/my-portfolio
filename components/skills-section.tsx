"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, Code2, Server, Database, Radio, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "text-[oklch(0.70_0.25_285)]",
    bg: "bg-[oklch(0.70_0.25_285/0.1)]",
    border: "border-[oklch(0.70_0.25_285/0.2)]",
    skills: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Spring Boot", level: 92 },
      { name: "Angular", level: 88 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5 & CSS3", level: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-[oklch(0.76_0.19_196)]",
    bg: "bg-[oklch(0.76_0.19_196/0.1)]",
    border: "border-[oklch(0.76_0.19_196/0.2)]",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "OAuth 2.0 & JWT", level: 90 },
      { name: "Hibernate & JPA", level: 88 },
      { name: "Node-RED", level: 85 },
      { name: "Apache NiFi", level: 85 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Redis", level: 88 },
      { name: "PouchDB", level: 86 },
    ],
  },
  {
    title: "IoT & Protocols",
    icon: Radio,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    skills: [
      { name: "Modbus TCP & OPC UA", level: 85 },
      { name: "MQTT", level: 90 },
      { name: "BACnet", level: 75 },
      { name: "IoT Hub", level: 88 },
      { name: "Kafka Streams", level: 87 },
      { name: "WebSockets", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Jenkins CI/CD", level: 80 },
      { name: "Maven", level: 85 },
      { name: "SonarQube", level: 85 },
      { name: "JUnit Testing", level: 88 },
      { name: "SVN & Git", level: 85 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[oklch(0.70_0.25_285/0.03)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col gap-3 mb-16">
            <div>
              <span className="section-label">03. Technology stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column - Category Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon
                const isActive = activeTab === idx
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? "glass border-primary/30 shadow-[0_8px_32px_oklch(0_0_0/0.05)]"
                        : "bg-white/[0.01] hover:bg-white/[0.04] border-white/[0.05]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-skill-bg"
                        className="absolute inset-0 bg-primary/5 -z-10"
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      />
                    )}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.bg} ${category.color} ${category.border} border`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-base transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {category.skills.length} core technologies
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Column - Skill Visualizer (Dashboard style) */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 md:p-8 border-gradient shadow-xl relative min-h-[420px] flex flex-col justify-between">
                
                {/* Visual Accent */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-primary font-mono bg-primary/8 border border-primary/20 px-2.5 py-1 rounded-lg">
                  <Sparkles size={11} className="animate-pulse" />
                  Live Performance Metrics
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {skillCategories[activeTab].title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-8">
                    Core competency levels measured through engineering implementation
                  </p>

                  <div className="space-y-6">
                    {skillCategories[activeTab].skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-mono">
                          <span className="text-foreground font-semibold">{skill.name}</span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        {/* Custom Animated Progress Bar */}
                        <div className="skill-bar-track">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                            className="skill-bar-fill"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-muted-foreground font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Continually updated based on enterprise and IoT workloads.
                </div>

              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "1M+", label: "Monthly API Operations" },
              { value: "99.99%", label: "API Gateway Reliability" },
              { value: "10K+", label: "Connected IoT Edge Devices" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
