"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Code,
  Database,
  Bug,
  Rocket,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Mail,
  X,
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
      description:
        "Architecting full-scale CMS, CRM, and ERP solutions that don't just function—they dominate. We specialize in high-concurrency cloud architectures.",
    },
    {
      icon: <Code className="h-6 w-6 text-accent" />,
      title: "Strategic Web Apps",
      description:
        "Cutting-edge web applications built with React, Next.js, and Node.js. We don't just write code; we solve business bottlenecks with precision.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-accent" />,
      title: "Legacy Modernization",
      description:
        "We dive into your existing legacy systems, refactor the core, and transform outdated tech into modern, high-performance assets.",
    },
    {
      icon: <Server className="h-6 w-6 text-accent" />,
      title: "Infrastructure as Service",
      description:
        "Eliminate downtime. We manage your cloud infrastructure, databases, and deployments 24/7 so you can focus on your core business.",
    },
    {
      icon: <Bug className="h-6 w-6 text-accent" />,
      title: "Tactical Debugging",
      description:
        "Critical failure? Performance leak? Our forensic debugging squad identifies and eradicates the most complex software anomalies.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Full-Spectrum QA",
      description:
        "Automated end-to-end testing, security audits, and penetration testing. Our 'Zero-Bug' guarantee ensures total deployment confidence.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business logic and requirements.",
    },
    {
      number: "02",
      title: "Architecture",
      description: "Designing robust, scalable system blueprints.",
    },
    {
      number: "03",
      title: "Execution",
      description: "Agile development with daily progress transparency.",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Seamless, zero-downtime launch and optimization.",
    },
  ];

  // Manual scroll sync with URL
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && id !== activeSection) {
            setActiveSection(id);
            // Replace URL without reloading or jumping
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on the top-middle part of the viewport
      threshold: 0,
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.current?.observe(section));

    return () => observer.current?.disconnect();
  }, [activeSection]);

  const handleContactClick = (type: "whatsapp" | "email") => {
    if (type === "whatsapp") {
      window.open("https://wa.me/923100771165", "_blank");
    } else {
      // Direct high-reliability Gmail web-compose link
      const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1&to=solutions.neontech@gmail.com";
      window.open(gmailUrl, "_blank");
    }
    setShowContactModal(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("solutions.neontech@gmail.com");
    alert("Official email address copied to clipboard!");
  };

  const projects = [
    {
      title: "Attendance ERP",
      category: "ERP",
      description:
        "A complete Attendance Management ERP automated for workforce tracking with real-time reporting.",
      image: "/projects/attendance-ERP.png",
      tags: ["ASP.NET Core", "EF Core", "C#", "SQL Server", "Enterprise"],
    },
    {
      title: "SLC - Institute Management",
      category: "SaaS",
      description:
        "An all-in-one Institute Management SaaS featuring automated student/staff portals and transaction logs.",
      image: "/projects/SLC.png",
      tags: ["NestJS", "PostgreSQL", "Docker", "React", "Next.js", "SaaS"],
    },
    {
      title: "BC-AI (Blockchain AI)",
      category: "AI",
      description:
        "Next-Gen AI platform for transparent Blockchain analytics and complex data visualization.",
      image: "/projects/bc-AI.png",
      tags: ["Django", "Next.js", "AI", "Blockchain", "Python"],
    },
    {
      title: "Asvoria - Web3 Hub",
      category: "Blockchain",
      description:
        "A cutting-edge blockchain platform with SSR meta tags and high-performance Web3 integrations.",
      image: "/projects/asvoria.png",
      tags: ["React", "ExpressJS", "Firebase", "Web3", "Blockchain", "SSR"],
    },
    {
      title: "Don Pepe - GameFi",
      category: "Blockchain",
      description:
        "A Play-to-Earn crypto gaming platform with interactive trail animations and real-time wallet integration.",
      image: "/projects/don-pepe.png",
      tags: ["Next.js", "React", "TypeScript", "Web3", "GameFi", "Crypto"],
    },
    {
      title: "ServeConnect",
      category: "SaaS",
      description:
        "Premium service marketplace with AI-driven content refinement and smart matching.",
      image: "/projects/serve-connect.png",
      tags: ["TypeScript", "NestJS", "Docker", "AI Integration", "Redis"],
    },
    {
      title: "Production ERP",
      category: "ERP",
      description:
        "Industrial-grade systems for manufacturing workflows and resource optimization.",
      image: "/projects/production-ERP.png",
      tags: ["ASP.NET Core", "Manufacturing", "Enterprise", "Optimization"],
    },
    {
      title: "Payment ERP",
      category: "ERP",
      description:
        "A secure, high-volume Payment ERP solution ensuring accuracy and stability in financial processing.",
      image: "/projects/payment-ERP.png",
      tags: ["ASP.NET MVC", "C#", "FinTech", "Enterprise", "SQL Server"],
    },
    {
      title: "PPMS",
      category: "SaaS",
      description:
        "SaaS for petrol pump operations with automated WhatsApp alerts and financial management.",
      image: "/projects/PPMS.png",
      tags: ["NestJS", "PostgreSQL", "SaaS", "Automation", "FinTech"],
    },
    {
      title: "Info-AI Chatbot",
      category: "AI",
      description:
        "An adaptive chatbot powered by Gemini API with specialized modes for Programming and Science.",
      image: "/projects/info-AI.png",
      tags: ["React", "NestJS", "Gemini API", "AI Chatbot", "MongoDB"],
    },
    {
      title: "Blockchain Valley",
      category: "Blockchain",
      description:
        "A comprehensive blockchain portal with complex reward systems and user analytics.",
      image: "/projects/blockchain-valley.png",
      tags: ["React", "Firebase", "ExpressJS", "SSR", "Web3"],
    },
    {
      title: "Subtitle-O",
      category: "AI",
      description:
        "AI platform for video creators with automated subtitling and animation features.",
      image: "/projects/subtitle-O.png",
      tags: ["React", "NestJS", "FFmpeg", "AI", "Video Processing"],
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "TM1",
      role: "Chief Executive Officer",
      description:
        "Strategic visionary driving the future of Neon Tech's enterprise ecosystems.",
      image: "",
    },
    {
      id: 2,
      name: "TM2",
      role: "Chief Technical Officer",
      description:
        "Infrastructure mastermind specialized in high-concurrency cloud architectures.",
      image: "",
    },
    {
      id: 3,
      name: "TM3",
      role: "Lead AI Engineer",
      description:
        "Expert in neural networks and predictive analytics for business automation.",
      image: "",
    },
    {
      id: 4,
      name: "TM4",
      role: "Sr. Blockchain Developer",
      description:
        "Decentralized systems specialist building secure Web3 & GameFi solutions.",
      image: "",
    },
    {
      id: 5,
      name: "TM5",
      role: "Head of Product Design",
      description:
        "Crafting pixel-perfect, addictive user experiences for complex SaaS platforms.",
      image: "",
    },
    {
      id: 6,
      name: "TM6",
      role: "Full-Stack Architect",
      description:
        "Bridging the gap between robust backends and lightning-fast frontends.",
      image: "",
    },
    {
      id: 7,
      name: "TM7",
      role: "QA Engineering Lead",
      description:
        "Ensuring zero-bug deployments through rigorous automated testing & security audits.",
      image: "",
    },
    {
      id: 8,
      name: "TM8",
      role: "DevOps & Cloud Specialist",
      description:
        "Managing 24/7 reliability and seamless zero-downtime launches.",
      image: "",
    },
    {
      id: 9,
      name: "TM9",
      role: "Strategic Client Relations",
      description:
        "Bridging business needs with high-performance technological implementation.",
      image: "",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "ERP", "SaaS", "AI", "Blockchain"];
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const [teamIndex, setTeamIndex] = useState(teamMembers.length); // Start at the middle duplicate
  const [isPaused, setIsPaused] = useState(false);

  // Triple the list for a "true" infinite feel
  const displayMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setTeamIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle seamless reset when reaching boundaries
  const handleTeamNav = (dir: "next" | "prev") => {
    setIsPaused(true);
    if (dir === "next") {
      setTeamIndex((prev) => prev + 1);
    } else {
      setTeamIndex((prev) => prev - 1);
    }
    // Resume auto-scroll after 7s of manual inactivity
    setTimeout(() => setIsPaused(false), 7000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
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
            We build, manage, and modernize robust Web Apps and SaaS platforms
            (CMS, ERP, CRM). Trust Neon Tech to turn complex challenges into
            scalable, flawless solutions.
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
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background/50 text-foreground px-8 font-semibold transition-all hover:bg-accent/10 hover:border-accent/50"
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
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                About Neon Tech
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Dedicated Development Partner
              </h3>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                At Neon Tech, we are more than just coders. We are software
                engineers who prioritize robust architecture and flawless
                execution. Our expertise lies in SaaS development, including
                high-performance CMS, CRM, and ERP systems tailored specifically
                to client needs.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Whether you need a cutting-edge web app built from scratch, or
                require experts to take over, debug, and manage your legacy
                applications—we guaranteed efficiency and excellence. Your
                project&apos;s first impression matters, and we ensure it&apos;s
                nothing short of perfect.
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
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-accent/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl overflow-hidden flex items-center justify-center min-h-[400px] transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative w-full h-[360px]">
                  <Image
                    src="/logo.png"
                    alt="Neon Tech Official Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Portfolio Section */}
      <section id="projects" className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Proven Expertise
            </h3>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "bg-background border border-border text-foreground hover:border-accent/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-accent/50 hover:shadow-xl dark:hover:shadow-accent/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2 text-accent text-xs font-bold uppercase tracking-widest">
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {project.title}
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded-md bg-accent/5 border border-accent/10 text-accent uppercase font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Team Section with Infinite Carousel */}
      <section
        id="team"
        className="py-24 relative overflow-hidden bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              The Brains
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">
              Meet Our Core Squad
            </h3>

            {/* Centered Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => handleTeamNav("prev")}
                className="group p-3 rounded-full border border-border bg-card hover:border-accent text-foreground transition-all shadow-md active:scale-95"
              >
                <ArrowRight className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleTeamNav("next")}
                className="group p-3 rounded-full border border-border bg-card hover:border-accent text-foreground transition-all shadow-md active:scale-95"
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden px-4">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: `calc(-${teamIndex * 33.33}% - ${teamIndex * 2}rem)`,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {displayMembers.map((member, i) => (
                  <div
                    key={`${member.id}-${i}`}
                    className="min-w-[85%] md:min-w-[30%] lg:min-w-[calc(33.33%-1.5rem)] group relative p-10 rounded-3xl border border-border bg-card/40 text-center transition-all duration-500 hover:bg-card hover:border-accent/40 hover:-translate-y-2 shadow-sm"
                  >
                    <div className="relative w-28 h-28 rounded-full bg-accent/5 border border-accent/10 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/20 transition-all scale-110" />
                          <span className="relative z-10 text-accent font-black text-3xl tracking-tighter">
                            {getInitials(member.name)}
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="text-xl font-extrabold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                      {member.role}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed text-balance">
                      {member.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Methodology
            </h2>
            <h3 className="text-3xl font-bold text-foreground">
              Standard of Excellence
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 border-l border-border hover:border-accent transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-black text-accent/20 group-hover:text-accent transition-colors shrink-0">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h4>
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
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Premium Software Services
            </h3>
            <p className="text-lg text-foreground/70">
              From conception to deployment, and long-term maintenance. We
              provide end-to-end solutions designed for scale, speed, and
              absolute reliability.
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
                  <h4 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h4>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Trust Neon Tech?
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              We know that this site is our first impression on you, just as
              your application is the first impression on your users. We leave
              absolutely nothing to chance. We work efficiently, and our results
              are guaranteed. No shortcuts, no compromises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-background/20">
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">
                  100%
                </div>
                <div className="text-lg font-medium opacity-80">
                  Guaranteed Delivery
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">
                  24/7
                </div>
                <div className="text-lg font-medium opacity-80">
                  App Management
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-extrabold text-accent mb-2">
                  QA
                </div>
                <div className="text-lg font-medium opacity-80">
                  Rigorous Testing
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build the Impossible?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Skip the forms. Connect directly with our engineering team via your
            preferred platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => handleContactClick("whatsapp")}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:scale-105 transition-all shadow-lg hover:shadow-accent/40"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </button>
            <button
              onClick={() => handleContactClick("email")}
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
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Connect with Neon Tech
                </h3>
                <p className="text-foreground/70">
                  Choose your preferred method to start a project discussion.
                </p>
              </div>
              <div className="grid gap-4">
                <button
                  onClick={() => handleContactClick("whatsapp")}
                  className="flex items-center justify-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold hover:bg-accent hover:text-accent-foreground transition-all group"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp Message</span>
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </button>
                <button
                  onClick={() => handleContactClick("email")}
                  className="flex items-center justify-center gap-4 p-4 rounded-xl bg-background border border-border/60 text-foreground font-bold hover:bg-accent/5 hover:border-accent/40 transition-all group shadow-sm"
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
