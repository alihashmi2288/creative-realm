"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BrutalistButton, Marquee } from "@/components/ui/Brutalist";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function Home() {
  return (
    <main className="relative min-h-screen concrete-bg text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 md:px-12 pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[15%] md:top-20 right-[-10%] md:right-[-5%] pointer-events-none"
        >
          <span className="text-[40vw] md:text-[25vw] font-black leading-none text-outline-white uppercase select-none">RAW</span>
        </motion.div>
        <div className="max-w-full w-full chaotic-layer">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-[clamp(4rem,15vw,18rem)] font-headline font-black leading-[0.8] tracking-[-0.08em] uppercase italic"
          >
            SIMPLE <span className="text-outline">LINES</span><br />
            BOLD <span className="text-primary italic">IDEAS</span><br />
            <span className="text-outline">TIMELESS</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 md:mt-[-2rem] ml-0 md:ml-[10vw] max-w-2xl bg-primary text-black p-6 md:p-8 brutalist-border border-black transform md:-rotate-2"
          >
            <p className="text-xl sm:text-2xl md:text-4xl font-black leading-tight uppercase">
              An independent creative studio dedicated to elevating high-end brands through unpolished strength.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee animate on scroll */}
      <motion.div {...fadeInUp}>
        <Marquee items={["CLOUDWATCH", "BOLTSHIFT", "EPICURIOUS", "AETHER", "NEPTUNE", "QUANTUM"]} />
      </motion.div>

      {/* Manifesto Section */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
          <motion.div 
            {...fadeInUp}
            className="md:col-span-8 chaotic-layer"
          >
            <div className="bg-white text-black inline-block px-4 py-2 text-xs font-black uppercase mb-6">THE MANIFESTO / 001</div>
            <h2 className="text-6xl md:text-[8rem] font-headline font-black leading-[0.85] uppercase mb-12 mix-blend-difference">
              CLARITY OVER <span className="text-primary">NOISE</span>, PURPOSE OVER <span className="text-outline-white">TRENDS</span>.
            </h2>
            <Link href="/about">
              <BrutalistButton className="text-2xl px-10 py-6">
                JOIN THE REVOLUTION
              </BrutalistButton>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-4 mt-20 md:mt-0"
          >
             <div className="relative aspect-[3/4] brutalist-border border-white overflow-hidden">
                <Image 
                  src="/images/239402eded5482755650a005f73d8989.png" 
                  alt="Philosophy" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale contrast-150 filter brightness-50 hover:brightness-100 transition-all duration-500"
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Item 1 */}
          <motion.div {...fadeInUp} className="group relative">
            <div className="relative aspect-[4/5] bg-surface brutalist-border border-white overflow-hidden">
              <Image 
                src="/images/a6553f20adf4452ad412fff29db84d95.png"
                alt="Sonnet Poster"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-primary text-black px-4 py-1 text-xs font-black uppercase">POSTER / 2024</div>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase text-white font-headline">SONNET POSTER</h3>
                <p className="text-primary font-bold uppercase tracking-widest mt-2">Experimental Typography</p>
              </div>
              <div className="text-white/20 text-6xl font-black italic">01</div>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative md:mt-32"
          >
            <div className="relative aspect-[4/5] bg-surface brutalist-border border-primary overflow-hidden">
              <div className="absolute inset-4 brutalist-border border-white/20 z-10 pointer-events-none"></div>
              <Image 
                src="/images/c042026d0c28b54f6f316b42c8037fc4.png"
                alt="Commerce System"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 text-xs font-black uppercase">SYSTEM / 2024</div>
            </div>
            <div className="mt-6 flex justify-between items-end text-right md:text-left">
               <div className="order-2 md:order-1 text-white/20 text-6xl font-black italic">02</div>
               <div className="order-1 md:order-2">
                <h3 className="text-4xl md:text-5xl font-black uppercase text-white font-headline">COMMERCE SYSTEM</h3>
                <p className="text-primary font-bold uppercase tracking-widest mt-2">Digital Ecosystem</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-white text-black">
        <div className="px-6 md:px-12">
          <motion.h2 {...fadeInUp} className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-20 italic">EXPERTISE</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black border-y-4 border-black">
            {[
              { id: "01", title: "BRANDING & IDENTITY", hover: "WE BUILD ARCHITECTURAL LEGACIES." },
              { id: "02", title: "UI/UX DESIGN", hover: "DIGITAL ECOSYSTEMS FOR DISRUPTORS." },
              { id: "03", title: "CREATIVE DIRECTION", hover: "ART MEETS COMMERCE WITH FORCE." },
              { id: "04", title: "DEVELOPMENT", hover: "TECHNICAL SOLUTIONS WITH NO MERCY." }
            ].map((skill, index) => (
              <motion.div 
                key={skill.id} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-12 group hover:bg-primary transition-colors cursor-crosshair ${index >= 2 ? "md:border-t-4 md:border-black" : ""}`}
              >
                <span className="text-4xl font-black">{skill.id}</span>
                <h3 className="text-5xl md:text-6xl font-black uppercase mt-4">{skill.title}</h3>
                <p className="text-xl font-bold mt-8 hidden group-hover:block uppercase italic">{skill.hover}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-primary py-40 px-6 border-y-[20px] border-black overflow-hidden relative">
        <motion.div 
          initial={{ rotate: 12, x: -100 }}
          whileInView={{ rotate: 12, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        >
          <div className="text-[30vw] font-black text-black leading-none uppercase -translate-x-20">"QUOTE"</div>
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-8xl md:text-[12rem] font-black text-black leading-none mb-12 select-none opacity-20 transform -translate-x-10">“ ”</motion.div>
          <motion.h2 {...fadeInUp} className="text-4xl md:text-8xl font-black uppercase leading-[0.9] italic text-black break-words">
            "CREATIVE REALM REDEFINED HOW WE COMMUNICATE. THEIR APPROACH TO UI IS AN <span className="text-white bg-black px-4">UNSTOPPABLE</span> FORCE."
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1 }}
            className="mt-20 flex items-center gap-8"
          >
            <div className="h-1 bg-black"></div>
            <p className="text-2xl md:text-4xl font-black uppercase text-black">SARAH C. | BOLTSHIFT</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 bg-black text-white px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x-4 divide-y-4 divide-primary border-4 border-primary">
          {[
            { num: "05", label: "YEARS RAW", italic: true },
            { num: "120", label: "PROJECTS", outline: true },
            { num: "42", label: "SCALPS", italic: true },
            { num: "08", label: "PARTNERS", outline: true }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-16 flex flex-col items-center justify-center"
            >
              <p className={`text-9xl font-black ${stat.outline ? "text-outline" : ""} ${stat.italic ? "italic" : ""}`}>
                {stat.num}
              </p>
              <p className="text-xl font-black uppercase bg-primary text-black px-4 py-1 mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 px-6 bg-black flex flex-col items-center">
        <motion.h2 {...fadeInUp} className="text-7xl md:text-[10rem] font-black text-outline-white uppercase mb-20 italic text-center">PAY FOR QUALITY</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {navPricing.map((tier, i) => (
            <motion.div 
              key={tier.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${tier.highlight ? "bg-primary transform scale-105 z-20 hover:scale-110" : "bg-surface mt-10 hover:translate-y-[-10px]"} p-10 brutalist-border ${tier.highlight ? "border-black" : "border-white"} transition-all`}
            >
              {tier.highlight && <div className="bg-black text-primary inline-block px-4 py-1 text-xs font-black uppercase mb-4">RECOMMENDED</div>}
              <h3 className={`text-4xl font-black uppercase mb-2 ${tier.highlight ? "text-black" : "text-white"}`}>{tier.title}</h3>
              <p className={`text-6xl font-black mb-8 ${tier.highlight ? "text-black" : "text-primary"}`}>{tier.price}</p>
              <ul className="space-y-4 mb-12">
                {tier.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-3 font-bold uppercase ${tier.highlight ? "text-black" : f.active ? "text-white" : "text-white/40"}`}>
                    <span className={tier.highlight ? "" : f.active ? "text-primary" : "text-white/20"}>{f.active ? "✓" : "X"}</span> {f.label}
                  </li>
                ))}
              </ul>
              <BrutalistButton className={`w-full text-lg py-4 border-2 ${tier.highlight ? "bg-black text-primary hover:bg-white hover:text-black" : ""}`}>{tier.btn}</BrutalistButton>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Forge Section */}
      <section className="py-60 px-6 text-center relative overflow-hidden bg-black border-t-8 border-primary">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <span className="text-[50vw] font-black text-primary select-none leading-none">NOW</span>
        </motion.div>
        <div className="max-w-5xl mx-auto chaotic-layer">
          <motion.h2 
            {...fadeInUp}
            className="text-7xl md:text-[10rem] font-black text-white leading-none uppercase mb-20 italic"
          >
            FORGE THE<br /><span className="text-primary">FUTURE</span>
          </motion.h2>
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Link href="/contact">
              <BrutalistButton className="text-4xl md:text-6xl px-20 py-10 border-[12px] hover:-rotate-2">
                START PROJECT
              </BrutalistButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const navPricing = [
  {
    title: "BASIC",
    price: "$4.5K",
    btn: "GET STARTED",
    highlight: false,
    features: [
      { label: "Branding Audit", active: false },
      { label: "UX Strategy", active: false },
      { label: "Full Prototype", active: false }
    ]
  },
  {
    title: "PRO",
    price: "$12K",
    btn: "DESTROY LIMITS",
    highlight: true,
    features: [
      { label: "Branding Audit", active: true },
      { label: "UX Strategy", active: true },
      { label: "Full Prototype", active: true }
    ]
  },
  {
    title: "CUSTOM",
    price: "CALL",
    btn: "FREE AUDIT",
    highlight: false,
    features: [
      { label: "EVERYTHING ABOVE", active: true },
      { label: "24/7 SUPPORT", active: true },
      { label: "RETAINER BASIS", active: true }
    ]
  }
];
