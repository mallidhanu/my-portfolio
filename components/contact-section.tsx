"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Sparkles } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "mallikarjuna16y@gmail.com",
      href: "mailto:mallikarjuna16y@gmail.com",
      color: "text-[oklch(0.70_0.25_285)]",
      bg: "bg-[oklch(0.70_0.25_285/0.1)]",
      border: "border-[oklch(0.70_0.25_285/0.15)]",
    },
    {
      icon: Phone,
      label: "Phone Contact",
      value: "+91 9515181532",
      href: "tel:+919515181532",
      color: "text-[oklch(0.76_0.19_196)]",
      bg: "bg-[oklch(0.76_0.19_196/0.1)]",
      border: "border-[oklch(0.76_0.19_196/0.15)]",
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: "Bengaluru, India",
      href: "#",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/15",
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "madiga-mallikarjuna",
      href: "https://linkedin.com/in/madiga-mallikarjuna2377b8243",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/15",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.70_0.25_285/0.03)] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[oklch(0.76_0.19_196/0.04)] rounded-full blur-[100px] pointer-events-none" />

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
              <span className="section-label">06. Communication Hub</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mt-2 leading-relaxed">
              Have an exciting opportunity, dynamic project proposal, or simple inquiry?
              Drop a message below and let&apos;s build something powerful together.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left side - Contact information cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 font-mono uppercase tracking-wider">
                Direct Channels
              </h3>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/[0.05] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color} ${item.border} border group-hover:scale-105 transition-transform`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Follow Link List */}
              <div className="pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                  Developer Communities
                </p>
                <div className="flex gap-2.5">
                  {[
                    { href: "https://linkedin.com/in/madiga-mallikarjuna2377b8243", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/mallidhanu", icon: Github, label: "GitHub" },
                    { href: "mailto:mallikarjuna16y@gmail.com", icon: Mail, label: "Email" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="p-3 rounded-xl glass border border-white/[0.05] hover:bg-primary/8 hover:text-primary hover:border-primary/25 transition-all duration-300"
                      aria-label={s.label}
                    >
                      <s.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Premium Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 border-gradient shadow-xl relative">

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Successfully Dispatched</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Thank you for reaching out! I will review your inquiry and respond within 24 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="input-field"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="input-field"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Detailed Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="input-field resize-none"
                        placeholder="Hello, I would like to discuss..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider font-mono font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Transaction...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  )
}
