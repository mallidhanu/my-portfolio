"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-white/[0.06] overflow-hidden bg-background">
      {/* Decorative accent grid lines */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left - Copyright & Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left space-y-1.5"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-1.5 justify-center md:justify-start">
              Designed & Built with <Heart size={13} className="text-red-500 fill-red-500 animate-pulse" /> by
              <span className="text-foreground font-semibold"> Madiga Mallikarjuna</span>
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono">
              © {new Date().getFullYear()} All rights reserved. Powered by high availability.
            </p>
          </motion.div>

          {/* Center - Simple Clean Navigation links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6 text-sm font-mono"
          >
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Right - Back to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="p-3.5 rounded-xl glass border border-white/[0.05] hover:bg-primary/8 hover:text-primary hover:border-primary/20 transition-all duration-300 group shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>

        </div>
      </div>
    </footer>
  )
}
