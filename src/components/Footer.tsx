import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 overflow-hidden rounded-md border border-border">
                <Image src="/logo.png" alt="Neon Tech Logo" fill sizes="32px" className="object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Neon Tech
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Premium Software House specializing in custom Web Apps, SaaS development (CMS, CRM, ERP), and legacy application modernizations. We deliver robust, reliable, and guaranteed solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=29.390129,71.768422" 
                target="_blank" 
                className="flex items-center gap-2 text-foreground/50 hover:text-accent transition-colors text-sm"
              >
                <Globe className="h-5 w-5" />
                Find Us on Maps
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">SaaS Development</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">Web Applications</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">App Debugging & QA</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">Legacy App Takeover</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-accent transition-colors">Managed App Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-foreground/70">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-accent shrink-0" />
                <a href="mailto:solutions.neontech@gmail.com" className="hover:text-accent transition-colors">
                  solutions.neontech@gmail.com
                </a>
              </li>
              <li className="flex items-start text-foreground/70">
                <MessageCircle className="h-5 w-5 mr-3 mt-0.5 text-accent shrink-0" />
                <a href="tel:+923100771165" className="hover:text-accent transition-colors">
                  +92 310 0771165
                </a>
              </li>
              <li className="flex items-start text-foreground/70">
                <Globe className="h-5 w-5 mr-3 mt-0.5 text-accent shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=29.390129,71.768422" 
                  target="_blank"
                  className="hover:text-accent transition-colors"
                >
                  Stars Law College, Near Sutlej Motorcycle Factory,<br />
                  13.5km Main Hasilpur Road, Bahawalpur, Pakistan
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Neon Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-foreground/60 hover:text-accent text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
