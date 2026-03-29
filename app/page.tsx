"use client"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Code,
  Crosshair,
  Database,
  Layers,
  Lock,
  Radar,
  Server,
  Shield,
  Terminal,
  Zap,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

const habilidades = [
  { name: "Oracle Database", icon: Database, status: "OPERACIONAL" as const },
  { name: "Oracle APEX", icon: Zap, status: "OPERACIONAL" as const },
  { name: "React", icon: Code, status: "EM TREINAMENTO" as const },
  { name: "TypeScript", icon: Terminal, status: "EM TREINAMENTO" as const },
  { name: "Tailwind CSS", icon: Layers, status: "EM TREINAMENTO" as const },
  { name: "Node.js", icon: Server, status: "EM TREINAMENTO" as const },
  { name: "PostgreSQL", icon: Database, status: "EM TREINAMENTO" as const },
]

const operacoes = [
  {
    titulo: "NEXUS_CORE_INVENTORY",
    classificacao: "ALFA-7",
    stack: ["Oracle DB", "PL/SQL", "APEX", "Bcrypt"],
    descricao: "Sistema robusto de gestão de ativos e logística. Implementação de segurança via Bcrypt, triggers automatizados e procedures complexas para integridade de dados críticos.",
    link: "https://github.com/bryan-plsql/gestao-estoque-oracle",
    status: "OPERACIONAL",
  },
  {
    titulo: "CYBER_PROFILE_INTERFACE",
    classificacao: "GAMMA-4",
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    descricao: "Arquitetura de portfólio imersiva (este sistema). Foco em performance, animações por telemetria e UI/UX avançada com estética cyberpunk.",
    link: "https://github.com/bryan-plsql/portfolio-cyberpunk",
    status: "ATIVO",
  },
  {
    titulo: "LEGACY_RPG_PROTOCOL",
    classificacao: "DELTA-2",
    stack: ["React", "CSS Modules", "Vite"],
    descricao: "Protótipo de interface focado em gamificação e gerenciamento de estados para sistemas de RPG e interações dinâmicas.",
    link: "https://github.com/bryan-plsql/portifolio-rpg",
    status: "ARQUIVADO",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

//corrigindo erro, calando o typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as any;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      {/* Advanced grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.1),transparent_50%)]" />

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pt-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Terminal card */}
          <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-950/60 p-8 shadow-[0_0_60px_rgba(6,182,212,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:p-12 lg:p-16">
            {/* Gradient border glow */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 opacity-60" />
            
            {/* Terminal header */}
            <div className="relative mb-8 flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5">
                <Lock className="h-3 w-3 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider text-cyan-300">PERFIL_ATIVO::2026</span>
              </div>
            </div>

            {/* Responsive layout: text left, avatar right on desktop */}
            <div className="relative flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
              {/* Text content */}
              <div className="flex-1">
                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
                  </span>
                  PORTFÓLIO_OPERACIONAL
                </motion.div>

                {/* Main title with holographic glitch effect */}
                <div className="relative mb-6">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative text-balance font-mono text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-6xl lg:text-7xl"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                      Bryan Pereira
                    </span>
                    {/* Holographic layers */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-y-[2px] translate-x-[3px] bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent opacity-50 blur-[1px]"
                    >
                      Bryan Pereira
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 translate-y-[2px] -translate-x-[3px] bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 bg-clip-text text-transparent opacity-40"
                    >
                      Bryan Pereira
                    </span>
                  </motion.h1>
                  
                  {/* Subtle glow under title */}
                  <div className="absolute -bottom-4 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mb-8 max-w-2xl font-mono text-lg text-slate-400 sm:text-xl"
                >
                  <span className="text-cyan-400">&gt;</span> Desenvolvedor Full Stack <span className="text-fuchsia-400">/</span> Arquiteturas Robustas e Interfaces Imersivas
                </motion.p>

                <motion.a
                  href="#operacoes"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-cyan-100 transition-all duration-300 hover:border-cyan-400/60"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explorar Projetos
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </motion.a>
              </div>

              {/* Cyberpunk Avatar Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative shrink-0"
              >
                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-xl" />
                
                {/* Main avatar container with angular clip-path */}
                <div 
                  className="relative h-48 w-48 overflow-hidden border-2 border-cyan-400/60 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.4),inset_0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-md sm:h-56 sm:w-56 lg:h-64 lg:w-64"
                  style={{ clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
                >
                  {/* Glassmorphism inner layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
                  
                  {/* Placeholder image */}
                  <img 
                    src="/avatar.png" 
                    alt="Avatar do Bryan"
                    className="h-full w-full object-cover opacity-80"
                  />
                  
                  {/* Scanline overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(6,182,212,0.1)_2px,rgba(6,182,212,0.1)_4px)]" />
                  
                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
                  <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-fuchsia-500" />
                </div>
                
                {/* HUD label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-cyan-400/40 bg-slate-900/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  ID::Bryan_Pereira
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Telemetry Section */}
      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <Crosshair className="h-5 w-5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Modulo 01</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl">
            Minhas Habilidades
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* Skills grid - Compact cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {habilidades.map((hab) => (
              <motion.article
                key={hab.name}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex flex-col items-center gap-3 text-center">
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <hab.icon className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_4px_rgba(6,182,212,0.8)]" />
                  </div>
                  
                  {/* Tech name */}
                  <span className="font-mono text-sm font-semibold text-slate-100">{hab.name}</span>
                  
                  {/* Status badge */}
                  {hab.status === "EM TREINAMENTO" ? (
                        <span className="inline-flex items-center rounded border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                          [ EM TREINAMENTO ]
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                          [ OPERACIONAL ]
                        </span>
                      )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Profile card */}
          <motion.article
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl border border-fuchsia-500/20 bg-slate-900/40 p-6 backdrop-blur-md"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
            
            <h3 className="relative mb-6 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-fuchsia-300">
              <Shield className="h-4 w-4" />
              Perfil de Operador :: Bryan
            </h3>
            
            <ul className="relative space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10">
                  <Database className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <span>
                  <strong className="text-cyan-300">Integração de Dados:</strong> Base prática construída com Oracle DB e APEX. Atualmente expandindo o arsenal com <span className="text-white">Supabase</span> para gerenciar backends e autenticações de forma ágil.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-fuchsia-500/30 bg-fuchsia-500/10">
                  <Terminal className="h-3.5 w-3.5 text-fuchsia-400" />
                </div>
                <span>
                  <strong className="text-fuchsia-300">Controle e Curiosidade:</strong> Fluência em comandos <span className="text-white">Git</span> para versionamento seguro. Uma mente curiosa em fase de alto desenvolvimento, sempre dissecando documentações para absorver novas tecnologias.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10">
                  <Code className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <span>
                  <strong className="text-cyan-300">Operador Full Stack (Jr):</strong> Evoluindo a cada deploy. Foco em construir interfaces modernas com React/Next.js, transformando lógica em experiências visuais de alto impacto.
                </span>
              </li>
            </ul>
          </motion.article>
        </motion.div>
      </section>

      {/* Operations Section */}
      <section id="operacoes" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-32 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <Terminal className="h-5 w-5 text-fuchsia-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-400">Modulo 02</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl">
            Arquivos de Operacao
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-fuchsia-500 to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {operacoes.map((op) => (
            <motion.article
              key={op.titulo}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-cyan-500/60 via-fuchsia-500/60 to-cyan-500/60" />
              
              <div className="relative p-6">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded border px-2.5 py-1 font-mono text-xs uppercase ${
                    op.status === "ATIVO" 
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                      : op.status === "OPERACIONAL"
                      ? "border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-400 opacity-70" // ARQUIVADO
                  }`}>
                    {op.status}
                  </span>
                </div>

                <h3 className="mb-3 font-mono text-lg font-semibold text-white">{op.titulo}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">{op.descricao}</p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {op.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-700/80 bg-slate-800/50 px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                href={op.link}
                target="_blank" // <-- Atributo para abrir em nova aba
                rel="noopener noreferrer" // <-- Segurança para o navegador
                className="inline-flex items-center gap-2 font-mono text-sm font-medium text-cyan-400 transition-colors group-hover:text-fuchsia-400"
              >
                <span>ACESSAR SISTEMA</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Footer accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </main>
  )
}
