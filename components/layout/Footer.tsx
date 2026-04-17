import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-black p-12 md:p-24 border-t-[20px] border-black">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-6">
          <div className="text-6xl md:text-[6.5vw] font-black leading-none tracking-tighter mb-12 uppercase">
            Creative<br />Realm
          </div>
          <p className="text-3xl md:text-4xl font-black uppercase leading-[0.9] italic max-w-xl">
            MINIMALISM IS NOT THE ABSENCE OF SOMETHING. IT IS THE PERFECT AMOUNT OF SOMETHING.
          </p>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-xl font-black uppercase mb-12 bg-black text-primary inline-block px-4">LINKS</h4>
          <div className="flex flex-col gap-6 text-2xl md:text-3xl font-black uppercase">
            <Link href="/" className="hover:underline hover:italic transition-all">Home</Link>
            <Link href="/about" className="hover:underline hover:italic transition-all">About Us</Link>
            <Link href="/work" className="hover:underline hover:italic transition-all">Portfolio</Link>
            <Link href="/contact" className="hover:underline hover:italic transition-all">Contact</Link>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xl font-black uppercase mb-12 bg-black text-primary inline-block px-4">OFFICE</h4>
          <p className="text-2xl md:text-3xl font-black uppercase leading-tight italic">
            124 CROSBY ST,<br />NEW YORK, NY 10012
          </p>
          <div className="mt-20 flex gap-4">
            {[
              { label: "IG", href: "https://instagram.com/creativerealm" },
              { label: "LI", href: "https://linkedin.com/company/creativerealm" },
              { label: "BE", href: "https://behance.net/creativerealm" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-black flex items-center justify-center text-primary text-2xl font-black italic hover:bg-white hover:text-black transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t-8 border-black flex flex-col md:flex-row justify-between items-end gap-8">
        <p className="text-2xl font-black uppercase">© 2024 CREATIVE REALM STUDIO. ALL RIGHTS FORGED.</p>
        <p className="text-8xl font-black italic opacity-10 select-none">BRUTAL</p>
      </div>
    </footer>
  );
}
