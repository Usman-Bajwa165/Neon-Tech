"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Bot,
  Cpu,
  Globe,
  Layers,
  X,
} from "lucide-react";

export type Category =
  | "All"
  | "ERP"
  | "SaaS"
  | "AI"
  | "Blockchain"
  | "Mobile & Design";

export interface Project {
  title: string;
  category: Category | Category[];
  description: string;
  tags: string[];
  image: string;
  images?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  integrations?: string[];
}

export const categories: Category[] = [
  "All",
  "ERP",
  "SaaS",
  "AI",
  "Blockchain",
  "Mobile & Design",
];

export const projects: Project[] = [
  {
    title: "Attendance ERP",
    category: "ERP",
    description:
      "An enterprise-grade workforce tracking and biometric management ERP engineered for multi-shift factories, corporate offices, and distributed field operations. Built on ASP.NET Core and Entity Framework Core with SQL Server, it delivers sub-second automated clock-in reconciliations, geo-fenced attendance auditing, shift rotation rules, and automatic leave balance calculations with audit-grade reporting.",
    tags: ["ASP.NET Core", "EF Core", "C#", "SQL Server", "Enterprise", "Biometrics", "REST APIs", "Reporting"],
    image: "/projects/attendance-ERP.png",
    metrics: [
      { label: "Attendance Sync", value: "Real-Time / < 500ms" },
      { label: "Shift Scheduling", value: "Multi-Tier Automated" },
      { label: "Data Integrity", value: "ACID Compliant" },
      { label: "Report Generation", value: "PDF & Excel Instant" },
    ],
    highlights: [
      "Multi-Device Biometric Synchronization: Real-time UDP/TCP listener services interfacing with physical ZKTeco and RFID fingerprint hardware.",
      "Automated Shift & Overtime Computations: Custom rules engine calculating complex rotational shifts, grace periods, half-days, and overtime compensation.",
      "Geo-Fenced Mobile Punching: GPS-validated field staff check-ins with tamper-proof timestamp generation and IP restriction enforcement.",
      "Enterprise Leave & Exception Workflow: Multi-tier managerial approval pipelines with automated balance deduction and conflict alerts.",
      "Audit-Ready Reporting & Export Engine: High-speed server-side aggregation generating payroll-ready compliance summaries and anomaly reports.",
    ],
    integrations: ["ZKTeco Biometrics", "RFID Hardware", "SQL Server", "Active Directory", "SMTP Gateway", "SAP / Payroll Export"],
  },
  {
    title: "Production ERP",
    category: "ERP",
    description:
      "A heavy-duty manufacturing and industrial production ERP built on ASP.NET Core and EF Core. Streamlines bill-of-materials (BOM) decomposition, multi-stage assembly line tracking, scrap rate analytics, machine downtime monitoring, and automated procurement reorder cycles across multi-plant facilities.",
    tags: ["ASP.NET Core", "EF Core", "C#", "Manufacturing", "Enterprise", "BOM", "Inventory", "SCM"],
    image: "/projects/production-ERP.png",
    metrics: [
      { label: "BOM Decomposition", value: "Multi-Level Automated" },
      { label: "Shop Floor Tracking", value: "Sub-Second Station Sync" },
      { label: "Waste Reduction", value: "Up to 18% Tracked" },
      { label: "Throughput Capacity", value: "10,000+ Units/Day" },
    ],
    highlights: [
      "Multi-Level Bill of Materials (BOM): Interactive assembly breakdown supporting nested sub-assemblies, alternate raw materials, and unit conversions.",
      "Live Assembly Station Tracking: Real-time shop floor status board tracking production batches from raw material staging to final QA pass.",
      "Automated Min/Max Inventory Replenishment: Algorithmic stock thresholds that trigger automated purchase requisitions to prevent line halts.",
      "Quality Assurance & Defect Logging: Detailed batch-level quarantine workflows with root-cause scrap classification and vendor scoring.",
      "Equipment Uptime & OEE Analytics: Tracking Overall Equipment Effectiveness (OEE), maintenance intervals, and unplanned machine downtime.",
    ],
    integrations: ["Barcoding / QR Scanners", "SQL Server", "Industrial Scales", "Warehouse Logistics", "ERP Financials", "Export to CSV/PDF"],
  },
  {
    title: "Payment ERP",
    category: "ERP",
    description:
      "A mission-critical financial ledger and high-volume transaction processing ERP system built on ASP.NET MVC and C#. Designed for high-frequency accounting reconciliations, multi-currency receivables, automated supplier payouts, and strict double-entry ledger auditing with comprehensive fraud detection safeguards.",
    tags: ["ASP.NET MVC", "C#", "FinTech", "Enterprise", "SQL Server", "Double-Entry Ledger", "Security"],
    image: "/projects/payment-ERP.png",
    metrics: [
      { label: "Transaction Speed", value: "< 250ms Processing" },
      { label: "Ledger Standard", value: "Strict Double-Entry" },
      { label: "Audit Accuracy", value: "99.999% Reconciled" },
      { label: "Security", value: "AES-256 & Audit Logs" },
    ],
    highlights: [
      "Immutable Double-Entry Ledger: Cryptographically verifiable transaction logs ensuring zero ledger discrepancies and full balance sheet integrity.",
      "High-Volume Bank Reconciliation: Automated import and pattern matching of bank statements, resolving outstanding invoices and deposits.",
      "Multi-Currency & Exchange Fluctuations: Live currency rate conversion with automated realized and unrealized gain/loss tracking.",
      "Role-Based Maker-Checker Security: Multi-tier approval thresholds for large disbursements, mitigating unauthorized fund transfers.",
      "Comprehensive Tax & Compliance Automation: Configurable GST/VAT deductions, withholding tax withholding sheets, and government audit logs.",
    ],
    integrations: ["Banking APIs", "SQL Server Enterprise", "SWIFT/IBAN Gateways", "QuickBooks Sync", "Financial Audit Vault"],
  },
  {
    title: "Caliber - Autonomous AI Sales & Meeting Booking Ecosystem",
    category: ["AI", "SaaS"],
    description:
      "An enterprise-grade AI sales assistant engineered to handle multi-channel client engagement (WhatsApp, Instagram, Facebook, Telegram) and autonomous meeting bookings. Features live Google Calendar slot matching, dynamic Google Meet link creation, Google Sheets lead synchronization, and pgvector RAG Knowledge Vault with AI audit gap detection. Powered by Gemini, OpenAI, ElevenLabs voice synthesis, and Deepgram speech-to-text with NestJS, PostgreSQL, Prisma, Redis, BullMQ, and Zod validation.",
    tags: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Zod",
      "Gemini AI",
      "OpenAI",
      "ElevenLabs",
      "Deepgram",
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "pgvector",
      "RAG",
    ],
    image: "/projects/caliber-dashboard.png",
    images: [
      "/projects/caliber-dashboard.png",
      "/projects/caliber-vault.png",
      "/projects/caliber-channels.png",
    ],
    highlights: [
      "Omni-Channel Social Engagement: WhatsApp Business, Instagram Business, Facebook Portfolio, and Telegram Bot integrations for automated consultative sales conversations.",
      "Autonomous Meeting & Workspace Scheduling: Scans real-time Google Calendar availability, books appointments, creates instant Google Meet links, and syncs leads directly to Google Sheets & PostgreSQL CRM.",
      "pgvector RAG Knowledge Vault & AI Audit: 1536-dimensional vector search for FAQs & documentation (PDF, DOCX, web scraping) paired with automated AI Knowledge Audits to fix documentation gaps.",
      "Multi-Modal Voice & Text Engine: Combines Gemini & OpenAI for reasoning, ElevenLabs for realistic voice synthesis, and Deepgram for high-precision speech-to-text.",
      "High-Performance Asynchronous Architecture: NestJS microservices backed by Redis & BullMQ worker queues for async AI workloads, with strict Zod validation schema enforcement.",
      "Conversational Intelligence & Analytics: Real-time dashboard with latency tracking, lead qualification metrics, sentiment extraction, and automated conversation summaries.",
    ],
    metrics: [
      { label: "Platforms Supported", value: "WhatsApp, IG, FB, Telegram" },
      { label: "AI Workflows", value: "RAG + Voice + Booking" },
      { label: "Queue Architecture", value: "Redis + BullMQ Workers" },
      { label: "Vector Search", value: "pgvector (1536d)" },
    ],
    integrations: [
      "Google Calendar",
      "Google Meet",
      "Google Sheets",
      "WhatsApp Business",
      "Instagram",
      "Facebook",
      "Telegram",
      "Gemini API",
      "OpenAI",
      "ElevenLabs",
      "Deepgram",
    ],
  },
  {
    title: "Blockchain Valley",
    category: "Blockchain",
    description:
      "A decentralized blockchain ecosystem portal featuring dynamic server-side rendered (SSR) metadata for Web3 assets, real-time token economics tracking, interactive token distribution charts, and a secure Firebase-backed CMS for instant community governance announcements.",
    tags: ["React", "Firebase", "ExpressJS", "SSR", "Blockchain", "CMS", "Web3", "Tokenomics"],
    image: "/projects/blockchain-valley.png",
    metrics: [
      { label: "SEO Indexing", value: "100% Dynamic SSR" },
      { label: "Page Load Time", value: "< 800ms Global" },
      { label: "Live Data Feed", value: "WebSockets Enabled" },
      { label: "Admin CMS", value: "Real-Time Firebase" },
    ],
    highlights: [
      "Dynamic SSR Meta Tag Generation: Custom Express middleware delivering tailored OpenGraph and Twitter cards for social sharing of on-chain events.",
      "Real-Time Tokenomics & Vesting Schedules: Interactive charting visualising cliff periods, circulation supply curves, and treasury allocations.",
      "Role-Protected Editorial CMS: Secure Firebase Authentication and Firestore rules for real-time publishing of whitepapers and roadmaps.",
      "Web3 Wallet Connect Integration: Seamless MetaMask, Phantom, and WalletConnect bridging for community access tiers.",
      "Distributed Content Delivery: Edge caching and global CDN distribution ensuring lightning-fast load times across international traffic.",
    ],
    integrations: ["Firebase Firestore", "Express.js", "Ethers.js", "CoinGecko API", "WalletConnect", "Cloudflare CDN"],
  },
  {
    title: "BC-AI (Blockchain AI)",
    category: ["AI", "Blockchain"],
    description:
      "A hybrid artificial intelligence and distributed ledger analytics platform uniting Python/Django predictive machine learning models with Next.js dashboards. Detects anomalous on-chain wallet clusters, predicts gas price spikes, and visualizes transaction graph flows with institutional precision.",
    tags: ["Django", "Next.js", "AI", "Blockchain", "Python", "Fullstack", "Graph Analytics", "Machine Learning"],
    image: "/projects/bc-AI.png",
    metrics: [
      { label: "Prediction Accuracy", value: "94.2% Gas Spikes" },
      { label: "Graph Resolution", value: "100,000+ Nodes" },
      { label: "Latency", value: "Sub-Second Inference" },
      { label: "Chains Analyzed", value: "Multi-Chain EVM" },
    ],
    highlights: [
      "Machine Learning Gas Prediction Engine: Deep learning regression models analyzing mempool congestion to forecast optimal transaction timing.",
      "On-Chain Wallet Clustering & Forensics: Graph neural networks clustering smart contract interactions to detect wash trading and illicit capital flows.",
      "High-Performance Next.js Interactive Visualizer: WebGL-accelerated node diagrams visualizing fund flow routes across hundreds of intermediate wallets.",
      "Django REST Framework Asynchronous Pipeline: Celery worker queues ingesting high-throughput blockchain block events from full nodes.",
      "Custom Alerting & Webhooks: Instant push notifications triggered when monitored smart contracts experience abnormal liquidation events.",
    ],
    integrations: ["Ethereum RPC Nodes", "The Graph GraphQL", "Celery & Redis", "PyTorch / Scikit-Learn", "PostgreSQL", "Next.js"],
  },
  {
    title: "Info-AI Chatbot",
    category: "AI",
    description:
      "A context-aware intelligent conversational agent powered by Google Gemini API and NestJS microservices. Features dedicated domain-tuned reasoning modes for Software Engineering, Scientific Research, and Historical Chronology with dynamic memory recall and vector-based semantic conversation indexing.",
    tags: ["React", "NestJS", "Gemini API", "AI", "Chatbot", "MongoDB", "Context Memory", "TypeScript"],
    image: "/projects/info-AI.png",
    metrics: [
      { label: "Response Latency", value: "< 600ms Stream" },
      { label: "Domain Modes", value: "3 Specialized Personas" },
      { label: "Memory Retention", value: "Multi-Turn Context" },
      { label: "Availability", value: "99.9% Uptime" },
    ],
    highlights: [
      "Multi-Persona Domain Specialization: Tuned system prompts dynamically switching persona constraints between code debugging, scientific formulas, and historical archives.",
      "Streaming Response Synthesis: Real-time server-sent events (SSE) streaming token output from Gemini API directly into a slick React chat UI.",
      "MongoDB Conversation Graph Memory: Persists threaded conversation histories with token-aware memory summarization to prevent context cutoff.",
      "Syntax Highlighted Code Generation: Live markdown compilation with multi-language syntax highlighting and one-click code clipboard copy.",
      "Rate Limiting & Abuse Prevention: NestJS throttler guarding API endpoints against token exhaustion and DDOS bursts.",
    ],
    integrations: ["Google Gemini API", "MongoDB Atlas", "NestJS Guards", "TailwindCSS", "PrismJS Highlighting"],
  },
  {
    title: "Subtitle-O",
    category: ["AI", "SaaS"],
    description:
      "An automated cloud SaaS video transcription and subtitle styling platform. Leverages neural speech-to-text models and high-performance server-side FFmpeg pipelines to transcribe audio, synchronize timestamps, and bake animated TikTok/Reels-style captions directly into source video files.",
    tags: ["React", "NestJS", "FFmpeg", "AI", "SaaS", "Video Processing", "Speech-to-Text", "Cloud Storage"],
    image: "/projects/subtitle-O.png",
    metrics: [
      { label: "Transcription Accuracy", value: "98.5% Multilingual" },
      { label: "Rendering Pipeline", value: "GPU Accelerated FFmpeg" },
      { label: "Export Formats", value: "SRT, VTT & Burned MP4" },
      { label: "Turnaround Time", value: "1 min video in ~15s" },
    ],
    highlights: [
      "AI-Powered Word-Level Timestamp Alignment: High-precision speech segmentation aligning every spoken word to exact millisecond intervals.",
      "Dynamic Animated Caption Styling: Viral social-media-style preset animations with custom typography, emoji highlighting, and karaoke effects.",
      "High-Throughput FFmpeg Transcoding Worker: NestJS BullMQ queue delegating CPU/GPU-intensive subtitle burn-in rendering to background workers.",
      "Web Video Editor Preview: Real-time HTML5 canvas player allowing creators to edit typo words and adjust styling prior to final rendering.",
      "Cloud Asset Pipeline: S3-compatible chunked upload handling large 4K video files with secure presigned download links.",
    ],
    integrations: ["FFmpeg CLI", "Whisper / Speech AI", "AWS S3 / Wasabi", "BullMQ & Redis", "React Canvas"],
  },
  {
    title: "Third Bracket",
    category: "SaaS",
    description:
      "An advanced EdTech SaaS analytics platform empowering universities, colleges, and bootcamps with algorithmic student evaluation. Analyzes longitudinal grades, problem-solving speed, and skill gaps to generate predictive career roadmaps and customized curriculum interventions.",
    tags: ["React", "NestJS", "MongoDB", "AI", "EdTech", "SaaS", "Predictive Analytics", "Curriculum AI"],
    image: "/projects/third-bracket.png",
    metrics: [
      { label: "Student Profiling", value: "360° Competency Model" },
      { label: "Data Pipeline", value: "Automated Grade Ingestion" },
      { label: "Recommendation Engine", value: "Skill-Based Career Matching" },
      { label: "Deployment", value: "Cloud-Native Multi-Tenant" },
    ],
    highlights: [
      "Algorithmic Career Path Mapping: Multi-factor classification algorithms evaluating academic marks and behavioral strengths to recommend high-probability career paths.",
      "Interactive Student Performance Analytics: Comprehensive instructor dashboards displaying class distribution percentiles and individual progress trajectories.",
      "Automated Curriculum Gap Identification: Flags topics where student cohorts demonstrate low retention, suggesting targeted review modules.",
      "Multi-Tenant Institutional Architecture: Strict tenant isolation enabling universities, colleges, and training academies to host branded environments.",
      "Student Learning Portals: Individual self-assessment workspaces with assignment trackers, peer comparisons, and automated milestone badges.",
    ],
    integrations: ["MongoDB Enterprise", "NestJS Microservices", "LMS SCORM Gateways", "PDF Report Generation", "SendGrid Email Alerts"],
  },
  {
    title: "Blockhub Wakie",
    category: ["Blockchain", "Mobile & Design"],
    description:
      "A decentralized mobile-first Web3 social application bridging social engagement with on-chain micro-tipping, decentralized identity verification, and censorship-resistant feed distribution. Built under high-pressure turnaround with pixel-perfect responsive mobile UX.",
    tags: ["React", "TailwindCSS", "Next.js", "Web3", "Mobile", "Blockchain", "SocialFi", "Decentralized ID"],
    image: "/projects/blockhub-walkie.png",
    metrics: [
      { label: "Interface Target", value: "Mobile Native Experience" },
      { label: "Transaction Speed", value: "Instant Micro-Tips" },
      { label: "Wallet Support", value: "Multi-Chain EVM" },
      { label: "UX Performance", value: "60 FPS Touch Gestures" },
    ],
    highlights: [
      "Mobile-First Touch Architecture: Gesture-driven swipe feeds, floating action drawers, and bottom-sheet navigation designed specifically for mobile screens.",
      "On-Chain Micro-Tipping Protocol: Seamless peer-to-peer crypto tipping directly inside user comments and posts with zero platform fee deductions.",
      "Decentralized Profile Verification: ENS and Web3 address verification converting long cryptographic hashes into human-readable social profiles.",
      "Optimistic UI State Updating: Feed likes, comments, and replies update immediately with background blockchain synchronization.",
      "Low-Bandwidth Mobile Optimization: WebP image compression, lazy feed virtualization, and offline local cache management.",
    ],
    integrations: ["Web3Modal", "Ethereum & Polygon", "IPFS Storage", "Next.js Edge", "Tailwind Mobile UI"],
  },
  {
    title: "Asvoria",
    category: "Blockchain",
    description:
      "A modern decentralized Web3 hub featuring dynamic server-side rendered (SSR) SEO metadata, on-chain event trackers, community token staking pools, and a robust Firebase-backed admin portal for live content and member governance.",
    tags: ["React", "ExpressJS", "Firebase", "Blockchain", "SSR", "SEO", "Web3", "Staking"],
    image: "/projects/asvoria.png",
    metrics: [
      { label: "SEO Score", value: "100/100 Lighthouse" },
      { label: "Admin Sync", value: "Real-Time WebSocket" },
      { label: "Smart Contracts", value: "Audited ERC-20 / ERC-721" },
      { label: "Community Reach", value: "50,000+ Active Members" },
    ],
    highlights: [
      "Express SSR Dynamic Metadata Engine: Generates dynamic page titles, social previews, and canonical links based on live blockchain states.",
      "Firebase Real-Time Control Center: Instantaneous publishing of community proposals, staking APY adjustments, and governance articles.",
      "Token Staking & Reward Yield Calculators: Interactive simulation calculating compounding staking yields based on locked durations.",
      "Multi-Wallet Onboarding: Streamlined Web3 connection supporting MetaMask, Coinbase Wallet, and WalletConnect v2.",
      "High-Performance Content Cache: Redis/In-memory caching layer preventing duplicate RPC queries on high-traffic launch days.",
    ],
    integrations: ["Firebase Firestore & Auth", "Express.js", "Ethers.js", "WalletConnect", "Infura RPC"],
  },
  {
    title: "Flappy Base",
    category: "Blockchain",
    description:
      "An arcade Web3 play-to-earn game reviving the classic Flappy Bird mechanic with blockchain-backed leaderboard scoring, on-chain NFT reward minting on Base L2, and smooth GSAP 60-FPS physics animations.",
    tags: ["React", "TailwindCSS", "GSAP", "Web3", "GameFi", "Crypto", "Base L2", "Arcade"],
    image: "/projects/flappy-base.png",
    metrics: [
      { label: "Frame Rate", value: "Smooth 60 FPS" },
      { label: "Gas Cost", value: "Sub-Cent on Base L2" },
      { label: "Gameplay Latency", value: "Zero-Lag Physics" },
      { label: "Leaderboard", value: "Tamper-Proof On-Chain" },
    ],
    highlights: [
      "GSAP 60-FPS Canvas Physics: Fluid collision detection, smooth obstacle rendering, and momentum mechanics optimized for browser performance.",
      "Base Layer-2 Score Verification: Cryptographically signed score submissions verified on Base smart contracts to prevent client-side score tampering.",
      "Milestone NFT Trophy Minting: Reaching high-score tiers unlocks automated gas-optimized commemorative NFT badge minting.",
      "Global Arcade Leaderboard: Real-time competitive leaderboard ranking the highest scores across global crypto players.",
      "Web3 Wallet In-Game HUD: Displays active connected wallet balance, daily attempt counters, and reward claim buttons.",
    ],
    integrations: ["Base L2 Network", "GSAP Animation Engine", "Ethers.js", "Viem / Wagmi", "Google Docs Storage Sync"],
  },
  {
    title: "Don Pepe",
    category: "Blockchain",
    description:
      "A high-energy GameFi and Play-to-Earn crypto gaming platform engineered with interactive cursor trails, particle physics animations, decentralized reward pools, and real-time wallet balance integration built on Next.js.",
    tags: ["Next.js", "React", "TypeScript", "Web3", "GameFi", "Crypto", "Particle FX", "DeFi"],
    image: "/projects/don-pepe.png",
    metrics: [
      { label: "Visual FX", value: "Custom Particle Engine" },
      { label: "Contract Calls", value: "Optimized Batch Calls" },
      { label: "Network", value: "EVM High-Throughput" },
      { label: "Wallet Latency", value: "Instant Sync (< 300ms)" },
    ],
    highlights: [
      "Interactive Visual Trail FX: Smooth mouse-following particle physics and neon glow animations creating an exhilarating arcade aesthetic.",
      "Play-to-Earn Staking & Reward Pools: Smart contract integration allowing players to stake tokens to unlock exclusive game tiers and multiplier pools.",
      "Anti-Loss Gameplay Safeguards: Smart contract limits and cooldown timers designed to protect gamers from excessive consecutive risk exposure.",
      "Real-Time EVM Wallet HUD: Live display of connected Web3 account, token holdings, and instant reward withdraw triggers.",
      "Full Responsive Mobile & Desktop Layout: Touch-screen swipe controls alongside keyboard bindings for desktop arcade gameplay.",
    ],
    integrations: ["Next.js App Router", "Wagmi / Viem", "EVM Smart Contracts", "TailwindCSS", "Canvas Particle FX"],
  },
  {
    title: "Solana KYC",
    category: "Blockchain",
    description:
      "A clean, streamlined identity verification and compliance gateway built for the Solana blockchain. Features a modern, nature-inspired user experience, encrypted biometric document uploading, zero-knowledge credential proofs, and automated Solana SPL token soulbound badge issuance.",
    tags: ["React", "Next.js", "Solana", "Web3", "Identity", "TailwindCSS", "KYC / AML", "ZK-Proofs"],
    image: "/projects/solana-KYC.png",
    metrics: [
      { label: "Verification Speed", value: "Fast Automated OCR" },
      { label: "Blockchain", value: "Solana High-Speed" },
      { label: "Data Encryption", value: "End-to-End AES-256" },
      { label: "Gas Fee", value: "< $0.001 Per Verification" },
    ],
    highlights: [
      "Nature-Inspired Calming Onboarding UI: Modern ergonomic design pattern reducing user friction and dropout rates during tedious KYC verification.",
      "Solana Wallet Signature Auth: Direct integration with Phantom, Solflare, and Backpack wallets for secure cryptographic authentication.",
      "Encrypted Document Ingestion: Secure client-side chunking and encryption of government ID cards and proof-of-address documents.",
      "Soulbound SPL Compliance Tokens: Issues non-transferable on-chain verification badges allowing verified wallets to participate in compliant DeFi.",
      "Enterprise AML Screening: Automatic matching against global sanctions lists, PEP databases, and fraud warning registries.",
    ],
    integrations: ["Solana @solana/web3.js", "Phantom & Solflare", "AWS KMS Encryption", "OCR Document Engine", "TailwindCSS"],
  },
  {
    title: "Royalty Sale",
    category: "Blockchain",
    description:
      "A specialized digital marketplace engineered for trading intellectual property, music, and entertainment royalty rights on the blockchain. Enables creators to tokenize royalty streams into fractionalized NFTs with automated secondary market profit distributions.",
    tags: ["Next.js", "React", "Web3", "NFT", "Marketplace", "TypeScript", "Fractional IP", "Smart Contracts"],
    image: "/projects/royalty-sale.png",
    metrics: [
      { label: "Payout Automation", value: "100% On-Chain Splits" },
      { label: "Market Architecture", value: "Decentralized Escrow" },
      { label: "Asset Types", value: "Audio, IP, Digital Royalties" },
      { label: "Platform Fee", value: "Configurable Sub-2%" },
    ],
    highlights: [
      "Automated Split-Payment Contracts: Smart contract escrow splitting streaming revenue among token holders instantly upon deposit.",
      "Fractional Royalty Tokenization: Converts traditional legal royalty agreements into tradeable ERC-1155 / ERC-721 digital tokens.",
      "Secondary Trading Marketplace: Decentralized order book allowing users to list, bid, and execute instant trades with zero counterparty risk.",
      "Creator Revenue Dashboard: Real-time analytics displaying monthly streaming earnings, payout histories, and active token distribution charts.",
      "Mobile-Responsive Trading Terminal: Seamless order placement, chart viewing, and wallet transaction approval across smartphones and desktops.",
    ],
    integrations: ["Next.js", "Ethers.js / Viem", "IPFS Metadata Storage", "Alchemy RPC", "TailwindCSS", "Recharts"],
  },
  {
    title: "Yumi",
    category: "Blockchain",
    description:
      "A lightweight, high-performance crypto gaming and rewards hub. Features gamified daily quests, tokenized service management, instant prize claims, and an ultra-fast vanilla HTML/CSS/JavaScript runtime delivering instant load speeds even on low-spec hardware.",
    tags: ["HTML", "CSS", "JavaScript", "Crypto", "GameFi", "Web3", "Ultra-Lightweight", "High-Performance"],
    image: "/projects/yumi.png",
    metrics: [
      { label: "Bundle Size", value: "< 50KB Zero Dependencies" },
      { label: "First Contentful Paint", value: "< 350ms" },
      { label: "Browser Support", value: "100% Cross-Browser" },
      { label: "Interaction Speed", value: "Instant 0ms Overhead" },
    ],
    highlights: [
      "Zero-Framework Native Architecture: Handcrafted vanilla JavaScript with zero runtime overhead, executing instantly on any mobile or desktop browser.",
      "Interactive Gamified Dashboard: Daily spin wheels, quest trackers, and reward ladders encouraging continuous user retention.",
      "Crypto Reward Claim Engine: Direct integration with Web3 RPC endpoints for instant token prize distribution.",
      "Custom Responsive CSS Grid: Fluid layout adapting smoothly between narrow smartphone displays and widescreen displays without CSS frameworks.",
      "Offline State Caching: LocalStorage state persistence caching user preferences and session data for instantaneous returns.",
    ],
    integrations: ["Vanilla ES6+", "Web3.js", "SVG Micro-Animations", "CSS3 Hardware-Accelerated Transforms"],
  },
  {
    title: "Entrepreneur Bot",
    category: "Mobile & Design",
    description:
      "A high-frequency algorithmic trading bot control interface with a captivating dark aesthetic. Features sub-second order book visualizers, automated trading strategy selectors, real-time profit/loss candlestick graphs, and smooth kinetic scrolling for quantitative crypto and forex traders.",
    tags: ["React", "Next.js", "FinTech", "Trading", "Bot", "SaaS", "MUI", "Quantitative Finance", "Dark UI"],
    image: "/projects/entrepreneur-bot.png",
    metrics: [
      { label: "Market Data Refresh", value: "Sub-100ms WebSocket" },
      { label: "Bot Execution", value: "Automated Algorithmic" },
      { label: "UI Response", value: "Zero Stutter Scrolling" },
      { label: "Risk Management", value: "Stop-Loss / Take-Profit HUD" },
    ],
    highlights: [
      "High-Density FinTech Dark Mode: Carefully curated palette reducing eye fatigue during 24/7 market monitoring with vibrant neon indicator lights.",
      "Real-Time WebSocket Candlestick Engine: Live market streaming supporting multiple timeframes (1m, 5m, 1h, 1D) with technical indicators.",
      "Automated Strategy Configuration Panel: Visual parameter controls for grid trading, DCA strategies, trailing stop-losses, and leverage caps.",
      "Real-Time Profit/Loss Analytics: Dynamic calculation of realized vs unrealized PnL, win-rate ratios, and daily portfolio drawdowns.",
      "Smooth Kinetic Scrolling & Keyboard Hotkeys: Ergonomic keyboard shortcuts for rapid trade execution and emergency circuit breaker triggers.",
    ],
    integrations: ["Binance / Bybit API", "TradingView Lightweight Charts", "Material UI (MUI)", "WebSockets", "Next.js"],
  },
  {
    title: "Mighty Bot",
    category: "Mobile & Design",
    description:
      "A visually stunning showcase and marketing platform for an automated cryptocurrency trading bot. Powered by GSAP kinetic typography, magnetic hover animations, glassmorphism design tokens, and interactive performance simulation calculators.",
    tags: ["React", "Next.js", "Trading", "Bot", "UI/UX", "GSAP", "Glassmorphism", "Micro-Interactions"],
    image: "/projects/mighty-bot.png",
    metrics: [
      { label: "Animation Engine", value: "GSAP 3 ScrollTrigger" },
      { label: "User Engagement", value: "+45% Avg Time on Site" },
      { label: "Design Language", value: "Cyberpunk Glassmorphism" },
      { label: "Accessibility", value: "WCAG Compliant Contrast" },
    ],
    highlights: [
      "Award-Winning Visual Aesthetics: Sleek dark futuristic interface featuring custom glowing neon borders, glassmorphic cards, and subtle cybernetic accents.",
      "GSAP Scroll-Triggered Narratives: As the user scrolls, bot features, historical trade wins, and algorithmic models seamlessly animate into view.",
      "Interactive Profit Simulation Calculator: Sliders enabling prospective users to model projected compounding returns based on capital and risk tolerances.",
      "Live Trading Proof Feed: Ticker stream displaying simulated live bot order execution, verified trade percentages, and timestamped transactions.",
      "Conversion-Optimized CTA Flow: Seamless lead generation modals with integrated email capture and instant Telegram/Discord community bridges.",
    ],
    integrations: ["GSAP ScrollTrigger", "Framer Motion", "TailwindCSS", "Next.js", "Lucide Icons", "Discord / Telegram Bot API"],
  },
  {
    title: "Dtoub",
    category: "SaaS",
    description:
      "A multi-store SaaS e-commerce management platform built with Next.js and NestJS. Allows business owners to launch fully customized digital storefronts with dynamic theme customization, multi-currency payment checkout, automated stock inventory, and live order tracking.",
    tags: ["Next.js", "React", "NestJS", "E-commerce", "SaaS", "MongoDB", "Checkout", "Inventory"],
    image: "/projects/dtoub.png",
    metrics: [
      { label: "Checkout Speed", value: "< 2 Seconds Fast Checkout" },
      { label: "Multi-Storefront", value: "Multi-Tenant Cloud" },
      { label: "Uptime SLA", value: "99.95% Guaranteed" },
      { label: "Order Processing", value: "1,000+ Concurrent Orders" },
    ],
    highlights: [
      "Modular Storefront Theme Engine: Drag-and-drop customization allowing merchants to alter color palettes, banner carousels, and product grids without writing code.",
      "Unified Multi-Channel Inventory: Automatic synchronization of product stock across multiple sales channels to prevent overselling.",
      "Integrated Multi-Gateway Checkout: Frictionless payment processing supporting credit cards, digital wallets, bank transfers, and cash-on-delivery.",
      "Automated Order Lifecycle Notifications: Automated customer order confirmation, dispatch tracking numbers, and WhatsApp/Email delivery alerts.",
      "Merchant Analytics Dashboard: Comprehensive breakdown of average order value (AOV), customer acquisition trends, and top-selling SKUs.",
    ],
    integrations: ["Stripe API", "PayPal", "MongoDB Atlas", "NestJS Microservices", "Cloudinary Media", "Next.js"],
  },
  {
    title: "Staywo",
    category: "SaaS",
    description:
      "A global vacation rental and property booking SaaS marketplace akin to Airbnb. Built on React, NestJS, and PostgreSQL, it features interactive map-based property search, dynamic calendar date-range pricing, host payout management, and guest review verification.",
    tags: ["React", "NestJS", "PostgreSQL", "Real Estate", "SaaS", "Geo-Search", "Booking Engine"],
    image: "/projects/stawyo.png",
    metrics: [
      { label: "Search Latency", value: "< 150ms Geo-Spatial" },
      { label: "Availability Calendar", value: "Real-Time Lock Engine" },
      { label: "Host Payouts", value: "Automated Escrow Releases" },
      { label: "Database", value: "PostgreSQL with PostGIS" },
    ],
    highlights: [
      "PostGIS Geo-Spatial Property Discovery: Interactive map searching that queries properties within map bounds as users pan and zoom.",
      "Concurrency-Safe Date Reservation Engine: Database locks preventing double-bookings when multiple guests attempt to reserve overlapping dates.",
      "Dynamic Seasonal Pricing Rules: Hosts can configure weekend surcharges, seasonal discounts, cleaning fees, and long-stay reductions.",
      "In-App Messaging & Host Portals: Secure real-time chat between travelers and property managers for arrival coordination.",
      "Verified Review & Rating System: Post-stay feedback algorithms preventing fraudulent reviews and establishing host trust ratings.",
    ],
    integrations: ["Mapbox / Google Maps API", "Stripe Connect Escrow", "PostgreSQL PostGIS", "AWS S3 Image Store", "NestJS"],
  },
  {
    title: "Taskly",
    category: "SaaS",
    description:
      "An enterprise project and task management SaaS featuring granular Role-Based Access Control (RBAC), interactive Kanban boards, Gantt chart milestone tracking, automated deadline reminders, and team activity audit logs built with React, Node.js, Express, and MongoDB.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "SaaS", "Productivity", "RBAC", "Kanban"],
    image: "/projects/taskly.png",
    metrics: [
      { label: "Permission Levels", value: "Granular RBAC Policies" },
      { label: "Board Interaction", value: "60 FPS Drag & Drop" },
      { label: "Sync Engine", value: "Live WebSocket Events" },
      { label: "Task Capacity", value: "50,000+ Tasks Per Org" },
    ],
    highlights: [
      "Fluid Drag-and-Drop Kanban Boards: HTML5 drag-and-drop workspace for moving task cards across progress columns with optimistic UI updates.",
      "Hierarchical Role-Based Permissions: Detailed permission matrices (Owner, Admin, Member, Guest) controlling project visibility and edit rights.",
      "Automated Recurring Task Scheduler: Node.js cron workers creating repeating sprint tasks and sending deadline notification emails.",
      "Interactive Timeline & Gantt Visualizer: Visual dependency linking between parent milestones and child sub-tasks to identify project bottlenecks.",
      "Comprehensive Team Activity Feeds: Timestamped audit trails showing who modified, reassigned, or completed tasks across the workspace.",
    ],
    integrations: ["MongoDB Atlas", "Socket.io", "React Beautiful DND", "SendGrid Notifications", "Express.js"],
  },
  {
    title: "TeamFlow",
    category: "SaaS",
    description:
      "A high-performance team operations and workforce workflow SaaS built on React, NestJS, and PostgreSQL. Features real-time task assignment, sprint velocity tracking, team bandwidth heatmaps, and executive milestone reporting.",
    tags: ["React", "NestJS", "PostgreSQL", "SaaS", "Collaboration", "Sprint Tracking", "Team Bandwidth"],
    image: "/projects/teamflow.png",
    metrics: [
      { label: "Velocity Tracking", value: "Automated Sprint Burndown" },
      { label: "Database", value: "Relational PostgreSQL" },
      { label: "Response Time", value: "< 200ms API Queries" },
      { label: "Team Scaling", value: "10 to 1,000+ Collaborators" },
    ],
    highlights: [
      "Team Bandwidth & Workload Heatmaps: Visual indicators highlighting over-allocated engineers and underutilized team capacity to prevent burnout.",
      "Automated Agile Sprint Slicing: Generates burndown velocity charts, story point completions, and sprint retrospective scorecards.",
      "Centralized Project Milestone Roadmaps: High-level Gantt timelines allowing project managers to align cross-functional engineering deliverables.",
      "Real-Time Workstation Presence: Indicates active team members, current task focus, and working hours across multiple global timezones.",
      "Instant Document & Asset Attachments: Secure drag-and-drop file sharing tied directly to specific task cards and sprint deliverables.",
    ],
    integrations: ["PostgreSQL", "Prisma ORM", "NestJS REST", "TailwindCSS", "Recharts Dashboard"],
  },
  {
    title: "Team-Knowledge",
    category: "SaaS",
    description:
      "A centralized engineering knowledge base and technical documentation sharing platform built with React and NestJS in Docker containers. Features rich Markdown/WYSIWYG editing, document version control, instant full-text search, and team access hierarchies.",
    tags: ["React", "NestJS", "Knowledge Base", "SaaS", "Docker", "Markdown", "Documentation", "Full-Text Search"],
    image: "/projects/team-knowledge.png",
    metrics: [
      { label: "Search Indexing", value: "Instant Full-Text Search" },
      { label: "Deployment", value: "100% Docker Containerized" },
      { label: "Version History", value: "Git-Like Document Diffs" },
      { label: "Access Security", value: "Private Workspace Isolation" },
    ],
    highlights: [
      "Rich Collaborative Markdown Editor: Real-time markdown preview with math formulas (LaTeX), mermaid diagrams, and code snippets.",
      "Full-Text Indexed Search: Instant search across thousands of articles, code snippets, and standard operating procedures (SOPs).",
      "Document Revision Diffs: Side-by-side historical version comparison showing additions and deletions with one-click restore.",
      "Nested Hierarchy & Space Categorization: Organize documents into departments, engineering squads, onboarding guides, and architecture blueprints.",
      "Containerized Docker Architecture: Single-command Docker Compose setup enabling on-premise enterprise hosting or private cloud deployment.",
    ],
    integrations: ["Docker & Docker Compose", "NestJS API", "PostgreSQL / Elastic Index", "Markdown AST", "Mermaid.js"],
  },
  {
    title: "Enki Connect",
    category: "SaaS",
    description:
      "A professional B2B networking and industry collaboration platform built on React and Firebase. Combines verified professional profiles, real-time peer messaging, shared project rooms, and smart connection recommendations for enterprise networking.",
    tags: ["React", "Firebase", "Social", "Networking", "PaaS", "Real-Time Chat", "B2B"],
    image: "/projects/enki-connect.png",
    metrics: [
      { label: "Message Delivery", value: "Instant WebSocket Push" },
      { label: "Auth Security", value: "Firebase Multi-Factor" },
      { label: "Data Latency", value: "< 100ms Firestore Sync" },
      { label: "Profile Match", value: "Skill-Based Recommendation" },
    ],
    highlights: [
      "Real-Time Peer-to-Peer Chat: Instantaneous messaging with read receipts, unread message badges, and image attachments via Firebase Realtime Firestore.",
      "Smart Professional Skill Matching: Suggests high-value professional connections based on industry verticals, company size, and shared technologies.",
      "Verified Organization Pages: Allows companies to publish verified profile badges, open opportunities, and project collaboration tenders.",
      "Virtual Project Collaboration Hubs: Shared discussion spaces where multiple organizations can brainstorm joint ventures and exchange documents.",
      "Secure Authentication & Identity Rules: Firebase Authentication with fine-grained security rules protecting private messages from unauthorized reads.",
    ],
    integrations: ["Firebase Firestore", "Firebase Authentication", "Firebase Cloud Functions", "React", "TailwindCSS"],
  },
  {
    title: "Papaya",
    category: "SaaS",
    description:
      "An innovative, ultra-clean collaborative workspace platform for agile teams. Streamlines task management, cross-department document sharing, asynchronous status updates, and team productivity tracking with lightning-fast cloud deployment.",
    tags: ["JavaScript", "Vercel", "Collaboration", "PaaS", "Productivity", "Agile", "Modern UI"],
    image: "/projects/papaya.png",
    metrics: [
      { label: "Page Speed", value: "100/100 Vercel Edge" },
      { label: "Team Sync", value: "Asynchronous Standups" },
      { label: "Design System", value: "Modern Minimalist" },
      { label: "Load Time", value: "< 400ms Globally" },
    ],
    highlights: [
      "Asynchronous Daily Standups: Replaces disruptive daily meetings with concise written standups automatically aggregated for team leads.",
      "Zero-Clutter Workspace Design: Clean, minimalist UI philosophy focusing user attention on top-priority tasks without distraction.",
      "Drag-and-Drop Task Prioritization: Effortless backlog prioritization matrix ranking tasks by business urgency and technical complexity.",
      "Global Edge Deployment: Hosted on Vercel's global edge network, delivering instant response times regardless of user geography.",
      "Smart Productivity Insights: Weekly analytics summarizing completed objectives, turnaround velocity, and team collaboration ratings.",
    ],
    integrations: ["Vercel Edge Functions", "Cloud Storage", "Modern JavaScript", "TailwindCSS", "Progressive Web App (PWA)"],
  },
  {
    title: "Lenovo Workout",
    category: "Mobile & Design",
    description:
      "A high-performance digital fitness and conditioning web application engineered with tailored workout plan generation, real-time exercise countdown timers, calorie expenditure formulas, and interactive physical progress telemetry.",
    tags: ["JavaScript", "TailwindCSS", "Fitness", "HealthTech", "PaaS", "Mobile UI", "Telemetry"],
    image: "/projects/lenovo-workout.png",
    metrics: [
      { label: "Workout Routines", value: "Dynamic Personalized" },
      { label: "Timer Precision", value: "Millisecond Interval" },
      { label: "Mobile Experience", value: "PWA Offline Ready" },
      { label: "Visual Dashboards", value: "Interactive Charts" },
    ],
    highlights: [
      "Dynamic Workout Routine Builder: Custom fitness algorithms recommending personalized exercise sets based on target fitness goals and body mass index.",
      "High-Precision Interval Timer: Audio-assisted countdown timers guiding users through high-intensity interval training (HIIT) rest and work intervals.",
      "Caloric Expenditure & Telemetry Tracking: Real-time telemetry calculating estimated calories burned, total tonnage lifted, and heart-rate zone estimates.",
      "Interactive Muscle Group Heatmap: Visual anatomical diagram highlighting which muscle groups have been trained and which require rest.",
      "Offline-Ready Mobile PWA: Full offline capabilities enabling athletes to track workouts inside gyms with spotty mobile network connections.",
    ],
    integrations: ["HTML5 Web Audio", "LocalStorage Cache", "TailwindCSS", "Canvas Progress Circles", "PWA Manifest"],
  },
  {
    title: "Lin Kuei",
    category: "Mobile & Design",
    description:
      "A frontend UI/UX masterpiece demonstrating cutting-edge design engineering. Built with React, TypeScript, and GSAP, it features customizable theme tokens, pixel-perfect layout alignments, magnetic mouse physics, and breathtaking micro-animations.",
    tags: ["React", "TypeScript", "UI/UX", "Design System", "GSAP", "Micro-Interactions", "Theme Tokens"],
    image: "/projects/lin-kuei.png",
    metrics: [
      { label: "Animation Performance", value: "Silky 60-120 FPS" },
      { label: "Design Precision", value: "Pixel-Perfect Tokens" },
      { label: "Type Safety", value: "100% Strict TypeScript" },
      { label: "Theme Switching", value: "Instant 0ms Flickering" },
    ],
    highlights: [
      "Custom Design Token System: Comprehensive design tokens for typography scales, border radii, neon glow shadows, and spacing grids.",
      "GSAP Hardware-Accelerated Micro-Animations: Seamless page transitions, magnetic button physics, and custom cursor fluid dynamics.",
      "Zero-Flicker Dynamic Theming: Tailored theme switcher seamlessly interpolating CSS variable tokens between stealth dark and clean light modes.",
      "Component Design Showcase: Interactive library showcasing advanced UI components: glassmorphic cards, accordions, tabs, and glowing buttons.",
      "Strict Semantic Accessibility: Meets high accessibility standards with ARIA landmarks, keyboard focus rings, and screen-reader optimizations.",
    ],
    integrations: ["GSAP 3", "React 18+", "TypeScript", "TailwindCSS", "Lucide Icons"],
  },
  {
    title: "Techademy One",
    category: "Mobile & Design",
    description:
      "An intuitive online technology learning and technical skill evolution platform. Features course progression roadmaps, interactive coding challenge simulators, video lesson modules, and automated student certification issuance.",
    tags: ["HTML", "CSS", "JavaScript", "EdTech", "TailwindCSS", "Course Platform", "Interactive Learning"],
    image: "/projects/techadmey-one.png",
    metrics: [
      { label: "Course Roadmaps", value: "Structured Curriculum" },
      { label: "Page Optimization", value: "98+ Lighthouse Score" },
      { label: "Interactive Code", value: "In-Browser Code Snippets" },
      { label: "Completion Rate", value: "+30% Gamified Rewards" },
    ],
    highlights: [
      "Visual Career Learning Roadmaps: Interactive skill trees guiding aspiring developers from programming basics to advanced cloud architectures.",
      "In-Browser Code Snippet Demonstrations: Interactive code boxes with instant copy-paste and syntax-highlighted instructional breakdowns.",
      "Course Progress Tracking: Automated progress bars, chapter completion checks, and milestone badges that gamify the educational experience.",
      "Responsive Mobile-First Viewports: Seamless reading and video lecture playback optimized across small smartphones, tablets, and desktops.",
      "Automated Certificate Generator: Generates personalized, verifiable completion certificates with unique serial numbers upon course graduation.",
    ],
    integrations: ["TailwindCSS", "HTML5 Video Player", "Vanilla JS AST Parser", "Canvas Certificate Export"],
  },
  {
    title: "PPMS - Petrol Pump Management",
    category: "SaaS",
    description:
      "A specialized industrial SaaS engineered for petrol pump and fuel station operations. Features automated WhatsApp daily sales alerts, 24-hour database backups (SQL/PDF), dip-to-volume tank calibration, multi-nozzle meter reading tracking, fuel credit ledger, and comprehensive financial/stock management optimized for secure on-premise and local environments.",
    tags: ["NestJS", "PostgreSQL", "Docker", "React", "Next.js", "SaaS", "Industrial IoT", "WhatsApp API", "FinTech"],
    image: "/projects/PPMS.png",
    metrics: [
      { label: "Daily Backup", value: "Automated 24h SQL & PDF" },
      { label: "Alert System", value: "Instant WhatsApp Dispatch" },
      { label: "Tank Calibration", value: "High-Precision Dip Charts" },
      { label: "Audit Accuracy", value: "100% Nozzle Reconciliation" },
    ],
    highlights: [
      "Automated WhatsApp Daily Reconciliation Alerts: Sends comprehensive daily sales, cash collections, and stock balances directly to station owners' WhatsApp.",
      "High-Precision Tank Dip-to-Volume Engine: Non-linear underground tank calibration algorithms computing exact remaining liters from physical dip measurements.",
      "Multi-Nozzle Meter Reading Audit: Cross-checks starting and ending meter readings against total cash and digital payments collected per attendant shift.",
      "Customer & Fleet Credit Ledger: Tracks credit fueling for corporate fleets with credit limits, payment histories, and automatic statement invoicing.",
      "Automated Disaster Recovery Backups: Scheduled background cron jobs creating encrypted SQL dumps and formatted PDF audit archives every 24 hours.",
    ],
    integrations: ["WhatsApp Business API", "PostgreSQL", "Docker & Docker Compose", "NestJS", "Next.js", "PDFMake Engine"],
  },
  {
    title: "SLC - Institute Management",
    category: "SaaS",
    description:
      "An all-in-one Institute and Academic Management SaaS featuring automated student/staff portals, biometric attendance integration, fee installment tracking, salary and payroll calculation, WhatsApp notifications, and daily secure backups for academic organizations.",
    tags: ["NestJS", "PostgreSQL", "Docker", "React", "Next.js", "SaaS", "EdTech", "Payroll", "Fee Management"],
    image: "/projects/SLC.png",
    metrics: [
      { label: "Student Portals", value: "Automated Self-Service" },
      { label: "Fee Reconciliations", value: "Installment Tracking" },
      { label: "Notifications", value: "Automated WhatsApp & SMS" },
      { label: "Data Protection", value: "Daily Encrypted Backups" },
    ],
    highlights: [
      "Student & Staff Lifecycle Management: Complete academic record system from initial admission and course enrollment to graduation and alumni tracking.",
      "Automated Fee Invoicing & Challan Generation: Manages multi-term installments, scholarship discounts, fine calculations, and printable bank challans.",
      "Staff Payroll & Attendance Sync: Directly integrates biometric daily attendance to calculate monthly teacher salaries, allowances, and deductions.",
      "WhatsApp Attendance & Exam Alerts: Notifies parents immediately when students are absent or when examination scorecards are released.",
      "Multi-Campus Administration: Centralized head-office dashboard comparing enrollment metrics, revenue collections, and exam statistics across campuses.",
    ],
    integrations: ["PostgreSQL", "NestJS", "Docker", "Next.js", "WhatsApp Gateway", "ZKTeco Biometrics"],
  },
  {
    title: "ServeConnect - AI Service Marketplace",
    category: ["AI", "SaaS"],
    description:
      "A premium dual-role service-matching ecosystem connecting Service Seekers (Availers) with verified Service Providers. Powered by Google Gemini AI for automated job description refinement and intelligent provider matching, real-time quotation bidding, request lifecycle management, and a high-performance Redis/NestJS architecture.",
    tags: [
      "TypeScript",
      "NestJS",
      "Docker",
      "AI Integration",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "SaaS",
      "Marketplace",
    ],
    image: "/projects/serve-connect.png",
    images: [
      "/projects/serve-connect.png",
      "/projects/serve-connect2.png",
      "/projects/serve-connect3.png",
    ],
    metrics: [
      { label: "Matching Speed", value: "< 500ms AI Suggestion" },
      { label: "Role Dynamics", value: "Dual-Role Availer / Provider" },
      { label: "Queue Processing", value: "Redis BullMQ Worker" },
      { label: "Database Scaling", value: "PostgreSQL & Prisma" },
    ],
    highlights: [
      "AI-Powered Request Refinement: Integrated Gemini AI analyzes raw user project requests and automatically refines scope, deliverables, and estimated timelines.",
      "Dual-Role Dynamic Switching: Users can switch seamlessly between seeking services (Availer) and offering professional quotes (Provider) with a single profile.",
      "Competitive Quote & Bidding Engine: Service providers can submit itemized estimates with milestone breakdowns and delivery commitments.",
      "End-to-End Request Lifecycle: State machine tracking requests through open bidding, provider selection, milestone delivery, client sign-off, and review.",
      "High-Performance Redis & NestJS Backend: Asynchronous message passing, cached category trees, and rate-limited endpoints for zero latency.",
    ],
    integrations: ["Google Gemini API", "Redis & BullMQ", "PostgreSQL", "NestJS", "Next.js", "Docker"],
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeCategory);
          }
          return project.category === activeCategory;
        });

  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Our Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Proven Systems & Engineering
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            A comprehensive showcase of industrial ERP solutions, Autonomous AI
            Agents, High-Scale SaaS, Decentralized Web3 Systems, and Precision
            Frontends.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) =>
                      Array.isArray(p.category)
                        ? p.category.includes(cat)
                        : p.category === cat
                    ).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 scale-105"
                      : "bg-card border border-border text-foreground/80 hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                      activeCategory === cat
                        ? "bg-black/20 text-accent-foreground"
                        : "bg-muted text-foreground/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) {
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  const categoriesList = Array.isArray(project.category)
    ? project.category
    : [project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      onClick={onSelect}
      className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 flex flex-col cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden bg-muted/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
            <Sparkles className="w-4 h-4" /> View Architecture & Details
          </span>
        </div>

        {/* Multi-view pill indicator */}
        {hasMultipleImages && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[11px] font-semibold text-accent">
            <Layers className="w-3.5 h-3.5" />
            <span>{images.length} Views</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {categoriesList.map((cat, i) => (
            <span
              key={i}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-wider"
            >
              {cat}
            </span>
          ))}
        </div>

        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h4>

        <p className="text-foreground/70 text-sm mb-5 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded-md bg-muted/70 text-foreground/80 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-muted/40 text-foreground/50 font-medium">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const images = project.images || [project.image];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const categoriesList = Array.isArray(project.category)
    ? project.category
    : [project.category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-3xl overflow-y-auto shadow-2xl text-foreground flex flex-col z-10"
      >
        {/* Sticky Accessible Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 self-end z-40 p-2.5 rounded-full bg-background/90 hover:bg-background border border-border text-foreground hover:text-accent transition-all shadow-lg cursor-pointer -mb-12 mr-4"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Screenshot Gallery */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-black/40 border-b border-border overflow-hidden shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[activeImgIndex]}
                alt={`${project.title} view ${activeImgIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImgIndex(
                    (prev) => (prev - 1 + images.length) % images.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-transform hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveImgIndex((prev) => (prev + 1) % images.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-transform hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Thumbnails strip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur-md p-1.5 rounded-full border border-border">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative w-12 h-8 rounded-md overflow-hidden border transition-all cursor-pointer ${
                      activeImgIndex === idx
                        ? "border-accent scale-105 shadow-md shadow-accent/30"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Thumbnail"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {categoriesList.map((cat, i) => (
                <span
                  key={i}
                  className="text-xs uppercase font-bold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
              {project.title}
            </h3>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/30 p-4 rounded-2xl border border-border">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center p-2">
                  <p className="text-xs text-foreground/60 font-mono mb-1">
                    {m.label}
                  </p>
                  <p className="text-sm font-bold text-accent">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <Bot className="w-4 h-4 text-accent" /> Project Overview & Enterprise Purpose
            </h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed bg-muted/20 p-4 rounded-xl border border-border/50">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" /> Architecture & Key
                Capabilities
              </h4>
              <div className="grid gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-muted/20 rounded-xl border border-border/50 text-sm text-foreground/90 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integrations */}
          {project.integrations && project.integrations.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" /> Platforms & Third-Party
                APIs
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.integrations.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted/40 text-foreground text-xs font-mono rounded-lg border border-border"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" /> Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-accent/5 text-accent text-xs rounded-lg font-semibold border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
