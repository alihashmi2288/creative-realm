"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BrutalistButton } from "@/components/ui/Brutalist";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function Portfolio() {
  const projects = [
    { id: "001", title: "KINETIC MONOLITH", tags: "DESIGN / ARCHITECTURE", size: "large", img: "/images/c042026d0c28b54f6f316b42c8037fc4.png" },
    { id: "002", title: "INTERFACE ALPHA", tags: "DEVELOPMENT", size: "small", img: "/images/a6553f20adf4452ad412fff29db84d95.png" },
    { id: "003", title: "BRUTAL LOGIC", tags: "STRATEGY", size: "small", img: "/images/e37680ca62e9f99e6b904159bd49dd22.png" },
    { id: "004", title: "CREATIVE ARCHIVE V2", tags: "MOTION / WEB", size: "large", img: "/images/eb677a8c502724da390a1581e3fd9b5b.png" }
  ];

  return (
    <main className="relative min-h-screen bg-[#0E0E0E] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Sidebar Filter Placeholder */}
      <aside className="hidden md:flex flex-col py-24 px-4 fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0E0E0E] z-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 px-4"
        >
          <p className="font-headline font-bold tracking-tighter uppercase text-xs text-white/40">SERVICES</p>
          <h2 className="text-xl font-black text-primary font-headline uppercase tracking-tighter">FILTERS</h2>
        </motion.div>
        <nav className="flex flex-col gap-1">
          {["DESIGN", "DEVELOPMENT", "STRATEGY", "MOTION"].map((filter, i) => (
            <motion.button 
              key={filter}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-center gap-4 py-4 px-4 font-black font-headline tracking-tighter uppercase transition-all ${i === 0 ? "bg-primary text-black" : "text-white/60 hover:text-white hover:bg-white/10"}`}
            >
              {filter}
            </motion.button>
          ))}
        </nav>
      </aside>

      <main className="md:ml-64 pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-12 md:py-24 border-b border-white/5">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[12vw] font-black text-primary monolith-text font-headline uppercase leading-none"
          >
            SELECTED<br />ARCHIVES
          </motion.h1>
          <motion.div 
            {...fadeInUp}
            className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <p className="max-w-xl text-lg text-white/60 font-body">
              A collection of high-performance digital monuments. We blend engineering precision with brutalist aesthetics to redefine industry standards.
            </p>
            <div className="flex gap-4">
              <span className="text-white/20 text-8xl font-black font-headline leading-none">2024</span>
            </div>
          </motion.div>
        </section>

        {/* Project Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${project.size === "large" ? "md:col-span-8" : "md:col-span-4"} group relative aspect-video md:aspect-square overflow-hidden bg-surface cursor-pointer`}
            >
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between group-hover:bg-primary/10 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-primary font-black font-headline text-2xl">#{project.id}</span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-black px-4 py-2 font-black font-headline">VIEW CASE</div>
                </div>
                <div>
                  <p className="text-white/60 font-bold tracking-widest text-xs mb-2 uppercase">{project.tags}</p>
                  <h3 className="text-4xl md:text-7xl font-black text-white font-headline leading-none uppercase">{project.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-primary scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-12 bg-primary flex flex-col items-center justify-center text-center">
          <motion.h2 
            {...fadeInUp}
            className="text-6xl md:text-[8vw] font-black text-black font-headline leading-[0.85] uppercase tracking-tighter mb-12"
          >
            LET'S BUILD<br />THE FUTURE
          </motion.h2>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Link href="/contact">
              <BrutalistButton variant="secondary" className="text-2xl px-12 py-6">
                INQUIRE NOW
              </BrutalistButton>
            </Link>
          </motion.div>
        </section>

        <Footer />
      </main>
    </main>
  );
}
