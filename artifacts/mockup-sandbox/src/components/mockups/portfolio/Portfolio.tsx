import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Twitter, Mail, ExternalLink, Code2, Terminal, ArrowRight, Zap, Coffee, Globe, ArrowDown } from 'lucide-react';
import './_group.css';

// --- Data ---
const PROJECTS = [
  {
    id: 1,
    title: 'Nexus Trade',
    category: 'Web3 Dashboard',
    description: 'A high-frequency trading interface for decentralized assets. Built with Next.js, WebGL, and real-time WebSocket feeds for zero-latency execution.',
    image: '/__mockup/images/rupesh-project-1.png',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    id: 2,
    title: 'Creator Stack',
    category: 'Mobile Application',
    description: 'The ultimate toolkit for independent creators to monetize their audience. Features a custom gesture-driven UI and seamless stripe integration.',
    image: '/__mockup/images/rupesh-project-2.png',
    tech: ['React Native', 'Zustand', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Termina CLI',
    category: 'Developer Tooling',
    description: 'A blazing fast terminal emulator written in Rust with a React-based configuration UI. Brings modern web ergonomics to native systems.',
    image: '/__mockup/images/rupesh-project-3.png',
    tech: ['Rust', 'Tauri', 'React', 'Vite'],
    link: '#'
  }
];

const SKILLS = [
  { name: 'TypeScript', level: 95 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'UI / UX Design', level: 80 },
  { name: 'WebGL / Three.js', level: 70 },
  { name: 'Rust', level: 60 }
];

const EXPERIENCES = [
  {
    year: '2023 — Present',
    role: 'Senior Frontend Engineer',
    company: 'Vanguard Tech',
    description: 'Leading the frontend architecture for next-gen financial tools. Reduced bundle size by 40% and implemented a comprehensive design system.'
  },
  {
    year: '2021 — 2023',
    role: 'Creative Developer',
    company: 'Studio Arcanum',
    description: 'Built award-winning promotional websites for global brands utilizing WebGL and advanced CSS animations.'
  },
  {
    year: '2019 — 2021',
    role: 'Full Stack Developer',
    company: 'Freelance',
    description: 'Delivered end-to-end web applications for startups, focusing on performance, accessibility, and modern aesthetics.'
  }
];

// --- Components ---

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Orbs */}
      <div 
        className="bg-glow-orb top-[20%] left-[10%] w-[600px] h-[600px]"
        style={{ background: 'hsl(var(--rg-primary))' }}
      />
      <div 
        className="bg-glow-orb bottom-[10%] right-[10%] w-[500px] h-[500px]"
        style={{ background: 'hsl(var(--rg-accent))' }}
      />
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url(/__mockup/images/rupesh-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-tr from-[hsl(var(--rg-primary))] to-[hsl(var(--rg-accent))] opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          <img 
            src="/__mockup/images/rupesh-avatar.png" 
            alt="Rupesh Gupta" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[hsl(var(--rg-border))] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ y: y1, opacity }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--rg-border))] bg-[hsl(var(--rg-surface))]/50 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--rg-primary))] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--rg-primary))]"></span>
            </span>
            <span className="font-mono text-sm tracking-wide text-[hsl(var(--rg-text-muted))]">AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            I build <span className="text-gradient">digital</span><br />
            experiences.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[hsl(var(--rg-text-muted))] mb-12 font-light leading-relaxed">
            Hi, I'm Rupesh Gupta. A creator, developer, and designer obsessed with crafting fast, immersive, and bold interfaces that leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#work"
              className="px-8 py-4 rounded-full bg-[hsl(var(--rg-text))] text-[hsl(var(--rg-bg))] font-medium tracking-wide hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Explore Work <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full border border-[hsl(var(--rg-border))] bg-[hsl(var(--rg-surface))] text-[hsl(var(--rg-text))] font-medium tracking-wide hover:bg-[hsl(var(--rg-surface-hover))] hover:border-[hsl(var(--rg-text-muted))] transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch <Zap className="w-4 h-4 text-[hsl(var(--rg-accent))]" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[hsl(var(--rg-text-muted))]" />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="py-10 border-y border-[hsl(var(--rg-border))] overflow-hidden bg-[hsl(var(--rg-surface))]/30 flex relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[hsl(var(--rg-bg))] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[hsl(var(--rg-bg))] to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-2xl md:text-4xl font-bold text-transparent" style={{ WebkitTextStroke: '1px hsl(var(--rg-text-muted))' }}>FRONTEND ENGINEERING</span>
            <span className="w-3 h-3 rounded-full bg-[hsl(var(--rg-primary))]" />
            <span className="text-2xl md:text-4xl font-bold text-transparent" style={{ WebkitTextStroke: '1px hsl(var(--rg-text-muted))' }}>UI/UX DESIGN</span>
            <span className="w-3 h-3 rounded-full bg-[hsl(var(--rg-accent))]" />
            <span className="text-2xl md:text-4xl font-bold text-transparent" style={{ WebkitTextStroke: '1px hsl(var(--rg-text-muted))' }}>CREATIVE DEVELOPMENT</span>
            <span className="w-3 h-3 rounded-full bg-[hsl(var(--rg-text))]" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function WorkSection() {
  return (
    <section id="work" className="py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-[hsl(var(--rg-primary))] uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Featured Projects</h3>
          </div>
          <p className="max-w-md text-[hsl(var(--rg-text-muted))]">
            A selection of my recent work focusing on modern interfaces, rich interactions, and scalable architectures.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden aspect-video bg-[hsl(var(--rg-surface))]">
                <div className="absolute inset-0 bg-[hsl(var(--rg-primary))]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="font-mono text-sm text-[hsl(var(--rg-accent))] mb-4">{project.category}</div>
                <h4 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h4>
                <p className="text-[hsl(var(--rg-text-muted))] text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm border border-[hsl(var(--rg-border))] rounded-full bg-[hsl(var(--rg-surface))]/50 text-[hsl(var(--rg-text-muted))]">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-[hsl(var(--rg-text))] hover:text-[hsl(var(--rg-primary))] transition-colors w-fit font-medium">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArsenalSection() {
  return (
    <section className="py-32 bg-[hsl(var(--rg-surface))]/30 relative border-y border-[hsl(var(--rg-border))]">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono tracking-widest text-[hsl(var(--rg-accent))] uppercase mb-4">The Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {SKILLS.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium tracking-wide">{skill.name}</span>
                <span className="font-mono text-[hsl(var(--rg-text-muted))]">{skill.level}%</span>
              </div>
              <div className="h-1 w-full bg-[hsl(var(--rg-surface-hover))] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[hsl(var(--rg-primary))] to-[hsl(var(--rg-accent))]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-32 relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="mb-20">
          <h2 className="text-sm font-mono tracking-widest text-[hsl(var(--rg-primary))] uppercase mb-4">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Journey So Far</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-3rem] w-px bg-[hsl(var(--rg-border))]" />
              
              <div className={`md:flex items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[hsl(var(--rg-surface))] border-2 border-[hsl(var(--rg-primary))] -translate-x-[5.5px] md:-translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 z-10" />
                
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} mb-2 md:mb-0`}>
                  <div className="font-mono text-sm text-[hsl(var(--rg-text-muted))] mb-2">{exp.year}</div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <div className="text-[hsl(var(--rg-primary))] font-medium mb-3">{exp.company}</div>
                </div>
                
                <div className={`w-full md:w-[45%] text-[hsl(var(--rg-text-muted))] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-[hsl(var(--rg-border))] relative overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(var(--rg-surface))]/50" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary</span>.</h2>
          <p className="text-xl text-[hsl(var(--rg-text-muted))] mb-10">
            Currently accepting new projects. Whether you have an idea in mind or just want to say hi, my inbox is always open.
          </p>
          <a href="mailto:hello@rupesh.dev" className="px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--rg-primary))] to-[hsl(var(--rg-accent))] text-white font-bold tracking-wide hover:shadow-[0_0_30px_hsla(var(--rg-primary),0.5)] transition-all duration-300 transform hover:-translate-y-1">
            hello@rupesh.dev
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-[hsl(var(--rg-border))]/50">
          <div className="text-[hsl(var(--rg-text-muted))] mb-6 md:mb-0 font-mono text-sm">
            © {new Date().getFullYear()} Rupesh Gupta. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[hsl(var(--rg-text-muted))] hover:text-white transition-colors p-2 hover:bg-[hsl(var(--rg-surface-hover))] rounded-full">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/rupesh_gupta___" target="_blank" rel="noreferrer" className="text-[hsl(var(--rg-text-muted))] hover:text-[hsl(var(--rg-accent))] transition-colors p-2 hover:bg-[hsl(var(--rg-surface-hover))] rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[hsl(var(--rg-text-muted))] hover:text-[#1DA1F2] transition-colors p-2 hover:bg-[hsl(var(--rg-surface-hover))] rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="portfolio-rupesh selection:bg-[hsl(var(--rg-primary))] selection:text-white">
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">RG.</div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#work" className="hover:text-[hsl(var(--rg-primary))] transition-colors">Work</a>
            <a href="#about" className="hover:text-[hsl(var(--rg-primary))] transition-colors">About</a>
            <a href="#contact" className="hover:text-[hsl(var(--rg-primary))] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Marquee />
        <WorkSection />
        <ArsenalSection />
        <JourneySection />
      </main>
      
      <Footer />
    </div>
  );
}
