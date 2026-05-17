"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Cpu, Zap, Sparkles } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Java & Spring Boot", description: "High-performance enterprise-grade backend engines", color: "text-[oklch(0.70_0.25_285)]" },
  { icon: Server, label: "Secure API Gateways", description: "Robust OAuth 2.0, JWT protocols securing vital integrations", color: "text-[oklch(0.76_0.19_196)]" },
  { icon: Cpu, label: "IoT Architectures", description: "Real-time edge data streaming and sensor automation", color: "text-emerald-400" },
  { icon: Zap, label: "Modern Frontend", description: "Dynamic user interfaces powered by Angular & React", color: "text-amber-400" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[oklch(0.70_0.25_285/0.05)] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] dot-pattern opacity-40 pointer-events-none" />

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
            <div className="flex items-center gap-2">
              <span className="section-label">01. About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Architecting the <span className="text-gradient-primary">Smart Cities</span> of Tomorrow
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Biography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-card p-8 rounded-2xl border-gradient relative shadow-xl">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Sparkles size={16} className="text-primary" />
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a performance-driven <span className="text-foreground font-semibold">Java Full-Stack Developer</span> with 
                  over 3 years of experience building mission-critical software ecosystems. My work has centered heavily 
                  around powering <span className="text-foreground font-semibold">Integrated Command & Control Centers (ICCC)</span> and 
                  industrial IoT solutions.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Leveraging technologies like <span className="text-foreground font-semibold">Spring Boot</span> and 
                  <span className="text-foreground font-semibold"> Angular</span>, I engineer resilient APIs designed to scale for high-availability. 
                  My focus is on minimizing transaction latency and securing integrations against modern threats.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  During my key tenure at <span className="text-foreground font-semibold">Trinity Mobility Private Ltd</span>, I spearheaded high-throughput IoT operations and IoT production environments—engineering highly available notification systems, edge IoT data gateways, secure vendor APIs, and real-time digital twins that now serve as the structural backbone for multi-city smart operations.
                </p>
              </div>

              {/* Stat callout */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl glass border border-white/[0.06] text-center">
                  <div className="text-4xl font-extrabold text-gradient-primary mb-1">80%</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Downtime Reduction</div>
                </div>
                <div className="p-6 rounded-2xl glass border border-white/[0.06] text-center">
                  <div className="text-4xl font-extrabold text-gradient-primary mb-1">10K+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Monitored Sensors</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl glass border border-white/[0.06] hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 card-lift"
                >
                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon size={22} />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
