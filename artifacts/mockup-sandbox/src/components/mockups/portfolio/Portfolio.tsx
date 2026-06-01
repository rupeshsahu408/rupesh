import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Instagram, Mail, ArrowRight, ExternalLink, Zap, Target, Rocket, Send, CheckCircle, User, MessageSquare } from 'lucide-react';
import './_group.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    document.title = "Rupesh Gupta | Solo Entrepreneur";
  }, []);

  return (
    <div className="portfolio-rupesh">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-[#030305]" />
      
      {/* Hero background image with overlay */}
      <div className="fixed inset-0 z-0 opacity-40">
        <img 
          src="/__mockup/images/hero-bg.png" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/80 to-[#030305]"></div>
      </div>

      <div className="stars"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 mix-blend-difference">
          <div className="text-xl font-bold tracking-tighter text-white font-[Space_Grotesk]">
            R<span className="text-[#8b5cf6]">.</span>G
          </div>
          <div className="flex gap-4">
            <a href="https://x.com/plyndrox" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors text-white">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/rupesh_gupta___/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors text-white">
              <Instagram size={18} />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[100dvh] flex flex-col justify-center items-center px-4 relative pt-20">
          <motion.div 
            style={{ opacity: opacityHero, y: yBg }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-[#c084fc]">India • Building in Public</span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
              Solo Entrepreneur.<br />
              <span className="text-gradient">Builder of Digital Futures.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-2xl text-[#a1a1aa] max-w-2xl mb-12 font-light">
              I'm Rupesh. A one-man army in the startup world. I build, launch, and scale digital products from scratch.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
              <a href="#ventures" className="btn-glow px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2">
                Explore Ventures <ArrowRight size={18} />
              </a>
              <a href="mailto:hello@sendora.me" className="btn-glow-outline px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2">
                <Mail size={18} /> Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Marquee */}
        <section className="py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="marquee-container">
            <div className="marquee-content text-xl md:text-2xl font-bold uppercase tracking-widest text-white/40">
              <span>Solo Founder</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Digital Startups</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Visionary</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Hustle</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>No Excuses</span>
              <span className="text-[#8b5cf6]">•</span>
            </div>
            <div className="marquee-content text-xl md:text-2xl font-bold uppercase tracking-widest text-white/40" aria-hidden="true">
              <span>Solo Founder</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Digital Startups</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Visionary</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>Hustle</span>
              <span className="text-[#8b5cf6]">•</span>
              <span>No Excuses</span>
              <span className="text-[#8b5cf6]">•</span>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The vision is massive. <br/><span className="text-gradient-purple">The execution is solo.</span></h2>
                <div className="space-y-6 text-[#a1a1aa] text-lg leading-relaxed">
                  <p>
                    I don't wait for permission or funding. I build. Every line of code, every design decision, every marketing strategy comes from a singular focus to create value.
                  </p>
                  <p>
                    I'm currently building multiple early-stage digital startups simultaneously. No massive teams, no bloated budgets—just raw execution and building in public.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-12">
                  <div className="glass-card p-6 rounded-2xl">
                    <Zap className="text-[#8b5cf6] mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-2">Fast Iteration</h3>
                    <p className="text-sm text-[#a1a1aa]">Moving at the speed of thought. Zero bureaucracy.</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl">
                    <Target className="text-[#c084fc] mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-2">Laser Focus</h3>
                    <p className="text-sm text-[#a1a1aa]">Optimizing for impact and real-world utility.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-transparent rounded-3xl filter blur-xl"></div>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c084fc]/20 blur-[50px]"></div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Rocket className="text-[#8b5cf6]" /> Current Focus
                  </h3>
                  <ul className="space-y-6">
                    {[
                      { title: "SaaS Ecosystems", desc: "Building interconnected B2B and B2C tools." },
                      { title: "Content Creation", desc: "Sharing the journey and motivating the next generation." },
                      { title: "Zero to One", desc: "Specializing in the hardest part of startups: starting." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                        <div>
                          <strong className="block text-white mb-1">{item.title}</strong>
                          <span className="text-[#a1a1aa] text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ventures Section */}
        <section id="ventures" className="py-32 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0515]">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Active <span className="text-gradient">Ventures</span></h2>
              <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg">
                Multiple early-stage digital startups currently in development. Building the foundational layers of tomorrow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "/__mockup/images/venture-1.png", title: "Project Alpha", type: "Digital Product" },
                { img: "/__mockup/images/venture-2.png", title: "Data Flow", type: "Analytics" },
                { img: "/__mockup/images/venture-3.png", title: "Creator OS", type: "Productivity" }
              ].map((venture, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  transition={{ delay: i * 0.2 }}
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={venture.img} alt={venture.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-[#c084fc] mb-2 uppercase tracking-wider">{venture.type}</div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center justify-between">
                      {venture.title}
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8b5cf6]" />
                    </h3>
                    <p className="text-[#a1a1aa] text-sm">Early stage development. Bootstrapped and building in public.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-32 px-4 border-t border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[600px] h-[600px] bg-[#c084fc] rounded-full filter blur-[150px]"></div>
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariant} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-md mb-6 text-sm font-medium tracking-wide uppercase text-[#c084fc]">
                  <MessageSquare size={14} /> Let's Connect
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Drop me a <span className="text-gradient">message.</span>
                </h2>
                <p className="text-[#a1a1aa] text-lg">Ideas, collabs, opportunities — I read everything.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 blur-[80px] pointer-events-none"></div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12 flex flex-col items-center gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center">
                      <CheckCircle size={40} className="text-[#8b5cf6]" />
                    </div>
                    <h3 className="text-3xl font-bold">Message Sent!</h3>
                    <p className="text-[#a1a1aa] text-lg max-w-sm">
                      Thanks for reaching out. I'll get back to you at <span className="text-[#c084fc]">hello@sendora.me</span> soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                      className="btn-glow-outline px-6 py-3 rounded-full text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="form-field-wrap">
                        <label className="form-label">Your Name</label>
                        <div className={`form-input-wrap ${focused === 'name' ? 'focused' : ''}`}>
                          <User size={16} className="form-icon" />
                          <input
                            type="text"
                            placeholder="Rupesh Gupta"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="form-field-wrap">
                        <label className="form-label">Email Address</label>
                        <div className={`form-input-wrap ${focused === 'email' ? 'focused' : ''}`}>
                          <Mail size={16} className="form-icon" />
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/* Message */}
                    <div className="form-field-wrap">
                      <label className="form-label">Your Message</label>
                      <div className={`form-input-wrap textarea-wrap ${focused === 'message' ? 'focused' : ''}`}>
                        <textarea
                          placeholder="Hey Rupesh, I'd love to collaborate on..."
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className="form-input form-textarea"
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-glow w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
                    >
                      Send Message <Send size={20} />
                    </motion.button>
                    <p className="text-center text-[#a1a1aa] text-sm">
                      Or email directly at <a href="mailto:hello@sendora.me" className="text-[#c084fc] hover:underline">hello@sendora.me</a>
                    </p>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[800px] h-[800px] bg-[#8b5cf6] rounded-full filter blur-[120px]"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 rounded-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build <span className="text-gradient">together.</span></h2>
            <p className="text-xl text-[#a1a1aa] mb-10 max-w-2xl mx-auto">
              Whether you want to discuss startups, collaborate on a project, or just say hi. My inbox is always open.
            </p>
            <a href="mailto:hello@sendora.me" className="inline-flex btn-glow px-10 py-5 rounded-full font-bold text-lg items-center gap-3">
              hello@sendora.me <ArrowRight />
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 text-center text-[#a1a1aa] text-sm flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a href="https://x.com/plyndrox" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://www.instagram.com/rupesh_gupta___/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p>© {new Date().getFullYear()} Rupesh Gupta. Solo Entrepreneur.</p>
        </footer>
      </div>
    </div>
  );
}
