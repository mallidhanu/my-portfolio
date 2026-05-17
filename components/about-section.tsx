"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Cpu, Zap } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Java & Spring Boot", description: "Enterprise-grade backend development" },
  { icon: Server, label: "API Gateway", description: "OAuth 2.0, JWT & security protocols" },
  { icon: Cpu, label: "IoT Systems", description: "Real-time sensor data integration" },
  { icon: Zap, label: "Angular", description: "Dynamic front-end applications" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I&apos;m a performance-driven Java Full-Stack Developer with over 3 years of experience 
                building mission-critical applications for Smart City and Safe City ecosystems. My expertise 
                lies in architecting Integrated Command and Control Centers (ICCC) and IoT Hub systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I specialize in creating enterprise-grade API layers using <span className="text-foreground font-medium">Java</span>, 
                <span className="text-foreground font-medium"> Spring Boot</span>, and 
                <span className="text-foreground font-medium"> Angular</span>, scaling services to support 
                <span className="text-primary font-medium"> 1M+ monthly operations</span> with 99.99% reliability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                My work in IoT integration has minimized emergency response latency through automated 
                IoTOps and real-time data streaming, making cities smarter and safer.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
