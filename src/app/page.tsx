"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, Code, Database, Bug, Rocket, Server, 
  ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Mail, X 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const services = [
    {
      icon: <Database className="h-6 w-6 text-accent" />,
      title: "SaaS Ecosystems",
      description: "Architecting full-scale CMS, CRM, and ERP solutions that don't just function—they dominate. We specialize in high-concurrency cloud architectures."
    },
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Strategic Web Apps",
      description: "Cutting-edge web applications built with React, Next.js, and Node.js. We don't just write code; we solve business bottlenecks with precision."
    },
    {
      icon: <Rocket className="h-6 w-6 text-accent" />,
      title: "Legacy Modernization",
      description: "We dive into your existing legacy systems, refactor the core, and transform outdated tech into modern, high-performance assets."
    },
    {
      icon: <Server className="h-6 w-6 text-accent" />,
      title: "Infrastructure as Service",
      description: "Eliminate downtime. We manage your cloud infrastructure, databases, and deployments 24/7 so you can focus on your core business."
    },
    {
      icon: <Bug className="h-6 w-6 text-accent" />,
      title: "Tactical Debugging",
      description: "Critical failure? Performance leak? Our forensic debugging squad identifies and eradicates the most complex software anomalies."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Full-Spectrum QA",
      description: "Automated end-to-end testing, security audits, and penetration testing. Our 'Zero-Bug' guarantee ensures total deployment confidence."
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "Deep dive into your business logic and requirements." },
    { number: "02", title: "Architecture", description: "Designing robust, scalable system blueprints." },
    { number: "03", title: "Execution", description: "Agile development with daily progress transparency." },
    { number: "04", title: "Deployment", description: "Seamless, zero-downtime launch and optimization." }
  ];

  // Manual scroll sync with URL
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const id = entry.target.getAttribute("id");
          if (id && id !== activeSection) {
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.current?.observe(section));

    return () => observer.current?.disconnect();
  }, [activeSection]);

  const handleContactClick = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp') {
      window.open("https://wa.me/923100771165", "_blank");
    } else {
      // Direct high-reliability Gmail web-compose link
      const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=solutions.neontech@gmail.com";
      window.open(gmailUrl, "_blank");
    }
    setShowContactModal(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("solutions.neontech@gmail.com");
    alert("Official email address copied to clipboard!");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            Elevating Enterprise Software
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
            Engineering the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-500">
              Future of Software
            </span>
          </h1>
          <p className="mt-6 text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            We build, manage, and modernize robust Web Apps and SaaS platforms (CMS, ERP, CRM). Trust Neon Tech to turn complex challenges into scalable, flawless solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md bg-foreground text-background px-8 font-medium transition-all hover:scale-105 hover:bg-foreground/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Explore Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent text-foreground px-8 font-medium transition-all hover:bg-card"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">About Neon Tech</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Dedicated Development Partner
              </h3>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                At Neon Tech, we are more than just coders. We are software engineers who prioritize robust architecture and flawless execution. Our expertise lies in SaaS development, including high-performance CMS, CRM, and ERP systems tailored specifically to client needs.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Whether you need a cutting-edge web app built from scratch, or require experts to take over, debug, and manage your legacy applications—we guaranteed efficiency and excellence. Your project&apos;s first impression matters, and we ensure it&apos;s nothing short of perfect.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Efficiency
                </div>
                <div className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Trust
                </div>
                <div className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2" />
                  Guaranteed Quality
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-accent/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl flex items-center justify-center min-h-[400px]">
                <div className="relative w-full aspect-square max-w-[300px]">
                  <Image
                    src="/logo.png"
                    alt="Neon Tech Official Logo"
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="methodology" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Our Methodology</h2>
            <h3 className="text-3xl font-bold text-foreground">Standard of Excellence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 border-l border-border hover:border-accent transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-black text-accent/20 group-hover:text-accent transition-colors shrink-0">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                </div>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Our Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Premium Software Services</h3>
            <p className="text-lg text-foreground/70">
              From conception to deployment, and long-term maintenance. We provide end-to-end solutions designed for scale, speed, and absolute reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-background border border-border shadow-sm shrink-0">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                </div>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Trust Section */}
      <section id="why-us" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Trust Neon Tech?</h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              We know that this site is our first impression on you, just as your application is the first impression on your users. We leave absolutely nothing to chance. We work efficiently, and our results are guaranteed. No shortcuts, no compromises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-background/20">
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">100%</div>
                <div className="text-lg font-medium opacity-80">Guaranteed Delivery</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">24/7</div>
                <div className="text-lg font-medium opacity-80">App Management</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">QA</div>
                <div className="text-lg font-medium opacity-80">Rigorous Testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Build the Impossible?</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Skip the forms. Connect directly with our engineering team via your preferred platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => handleContactClick('whatsapp')}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:scale-105 transition-all shadow-lg hover:shadow-accent/40"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </button>
            <button
              onClick={() => handleContactClick('email')}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-card border border-border text-foreground font-bold hover:scale-105 transition-all shadow-lg"
            >
              <Mail className="h-6 w-6" />
              Send an Email
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 p-2 text-foreground/50 hover:text-foreground hover:bg-background rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Connect with Neon Tech</h3>
                <p className="text-foreground/70">Choose your preferred method to start a project discussion.</p>
              </div>
              <div className="grid gap-4">
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex items-center justify-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold hover:bg-accent hover:text-accent-foreground transition-all group"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp Message</span>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center justify-center gap-4 p-4 rounded-xl bg-background border border-border text-foreground font-bold hover:bg-card transition-all group"
                >
                  <Mail className="h-6 w-6" />
                  <span>Send an Email</span>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <button
                  onClick={copyEmailToClipboard}
                  className="w-full text-xs font-medium text-foreground/50 hover:text-accent flex items-center justify-center gap-2 transition-colors"
                >
                  Or copy manually: solutions.neontech@gmail.com
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

