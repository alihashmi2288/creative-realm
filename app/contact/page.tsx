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

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-8 md:px-16 pt-48 mb-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" 
             style={{backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "40px 40px"}}>
        </div>
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-headline text-[12vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase text-white break-words mb-8"
        >
          GET IN <br /> <span className="text-primary">TOUCH</span>
        </motion.h1>
        <motion.div {...fadeInUp} className="max-w-2xl">
          <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed">
            We build digital monuments for the industrial age. Let's engineer your next breakthrough.
          </p>
        </motion.div>
      </section>

      {/* Form & Offices Grid */}
      <section className="px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-primary/20">
        {/* Contact Form */}
        <motion.div 
          {...fadeInUp}
          className="lg:col-span-7 py-16 lg:pr-16 border-b lg:border-b-0 lg:border-r border-primary/20"
        >
          <h2 className="font-headline text-3xl font-black uppercase tracking-tight mb-12 text-primary">PROJECT BRIEF</h2>
          <form className="space-y-12">
            {[
              { label: "NAME / ENTITY", placeholder: "WHO ARE YOU?", type: "text" },
              { label: "ELECTRONIC MAIL", placeholder: "WHERE DO WE REPLY?", type: "email" },
              { label: "THE MISSION", placeholder: "TELL US ABOUT THE KINETICISM YOU NEED.", type: "textarea" }
            ].map((field, i) => (
              <motion.div 
                key={field.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea 
                    className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-2xl font-headline transition-all placeholder:text-white/10 resize-none"
                    placeholder={field.placeholder}
                    rows={4}
                  />
                ) : (
                  <input 
                    className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-4 text-2xl font-headline transition-all placeholder:text-white/10"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                )}
              </motion.div>
            ))}
            <motion.div {...fadeInUp}>
              <BrutalistButton className="w-full py-8 text-2xl">
                INITIALIZE CONNECTION
              </BrutalistButton>
            </motion.div>
          </form>
        </motion.div>

        {/* Offices & Info */}
        <div className="lg:col-span-5 bg-surface/30 py-16 lg:pl-16 flex flex-col justify-between">
          <motion.div {...fadeInUp}>
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight mb-12">LOCATIONS</h2>
            <div className="space-y-16">
              {[
                { city: "NEW YORK", addr: "447 BROADWAY, 2ND FLOOR\nNEW YORK, NY 10013", phone: "+1 212 990 0011", active: true },
                { city: "LONDON", addr: "12-14 OLD STREET\nLONDON, EC1V 9BE", phone: "+44 20 7712 1100" }
              ].map((loc, i) => (
                <div key={loc.city} className={`border-l-4 ${loc.active ? "border-primary" : "border-white/20"} pl-8`}>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">{loc.city}</h3>
                  <p className="text-white/60 font-medium leading-relaxed whitespace-pre-line">
                    {loc.addr}<br />{loc.phone}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} className="mt-24">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight mb-8">SOCIAL ARCHIVE</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "INSTAGRAM", href: "https://instagram.com/creativerealm" },
                { label: "LINKEDIN", href: "https://linkedin.com/company/creativerealm" },
                { label: "TWITTER", href: "https://twitter.com/creativerealm" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-200"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Break */}
      <section className="w-full h-[600px] bg-surface relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image 
            src="/images/c6875fd74a7a791d72ea617f663d59e3.png" 
            alt="Architectural detail" 
            fill 
            sizes="100vw"
            className="object-cover grayscale mix-blend-luminosity"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-16 left-16">
          <p className="font-headline text-9xl font-black uppercase tracking-tighter opacity-10">REALM</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
