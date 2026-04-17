"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BrutalistButton } from "@/components/ui/Brutalist";
import { motion } from "framer-motion";
import React from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function About() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end px-12 pb-24 pt-48">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
           <Image 
             src="/images/bf2ce411fb729558a4bc6b29755376c7.png" 
             alt="Brutalist structure" 
             fill 
             sizes="100vw"
             className="object-cover"
           />
        </motion.div>
        <div className="relative z-10 w-full">
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] md:text-[15vw] font-black leading-[0.8] tracking-tighter uppercase font-headline monolith-text"
          >
            REDEFINING<br />THE DIGITAL<br /><span className="text-primary">MONOLITH</span>
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-surface py-32 px-12 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div {...fadeInUp} className="md:col-span-8">
            <h2 className="text-primary text-2xl font-bold mb-8 tracking-widest uppercase">OUR CREDO</h2>
            <p className="text-4xl md:text-7xl font-bold font-headline uppercase leading-tight tracking-tight">
              WE PURSUE <span className="bg-white text-black px-4">UNPOLISHED STRENGTH</span> AND KINETIC PRECISION. WE REJECT THE SOFT CONVENTIONS OF THE WEB TO BUILD DIGITAL STRUCTURES THAT ENDURE.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 flex items-end text-white/60 text-xl leading-relaxed"
          >
            <p>
              The internet has become a sea of sameness. Creative Realm was founded to break the mold through brutalist engineering and architectural design principles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { id: "01", title: "Website Design", desc: "Architecting visual narratives." },
            { id: "02", title: "Development", desc: "Engineered for performance." },
            { id: "03", title: "Digital Strategy", desc: "Dominate the noise." }
          ].map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-surface p-12 min-h-[500px] flex flex-col justify-between group hover:bg-primary transition-all duration-300 ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div>
                <span className="text-primary group-hover:text-black font-black text-4xl block mb-12">{service.id}</span>
                <h3 className="text-5xl font-black font-headline uppercase tracking-tighter group-hover:text-black mb-4">
                  {service.title.split(" ").map((word, j) => <React.Fragment key={j}>{word}<br/></React.Fragment>)}
                </h3>
                <p className="text-white/60 group-hover:text-black text-xl uppercase font-bold tracking-tight">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-32 px-12 flex flex-col items-center text-center">
        <motion.h2 {...fadeInUp} className="text-black text-6xl md:text-9xl font-black font-headline uppercase mb-12 leading-none">
          READY FOR<br />TRANSFORMATION?
        </motion.h2>
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Link href="/contact">
            <BrutalistButton variant="secondary" className="text-3xl px-16 py-8">
              START PROJECT
            </BrutalistButton>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
