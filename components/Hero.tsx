"use client";

import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  return (
    <section className="grow flex flex-col justify-center relative z-10 px-4 pt-10 pb-20 min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mb-2 animate-float"
            style={{ animationDuration: "4s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              Open to work
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-gray-400 dark:text-gray-400 text-2xl sm:text-3xl lg:text-4xl mb-2 font-normal"
            >
              Hi, I&apos;m Soumyajit Das
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-400"
            >
              Full Stack
            </motion.span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400 inline-block max-w-full">
              <TypingAnimation text="Engineer." delay={0.5} speed={100} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            I build scalable digital experiences with modern technologies.
            Specializing in high-performance web applications and sleek UI
            interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="h-12 px-8 rounded-lg bg-primary text-background-dark font-bold text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(13,185,242,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="/Resume_Soumyajit1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary text-gray-800 dark:text-white font-medium text-base transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Download CV</span>
              <span className="material-symbols-outlined text-lg">
                download
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-y-10 scale-75"></div>
          <div className="relative z-10 w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a1014] group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
              data-alt="Abstract coding screen with dark background and neon syntax highlighting"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7UrTDnVB_SKWfjWuiyZX8_U566NhhoPQmZ8mCVUrNh0CbxWkD80jLk6VtuOSPvM9Rh4SNykITLgUbSdsNYIm_P0ljjgae-rVbu5x8km9ixi8mAnfa9wFxUZ0qeaH_j5r45GvJ9XRjeLNn6M-0kZ5QVKGkk2TOz1Izl3gUs5Aw5dZntErp0ctlhQOz2fPIhWfkc9y4UHzSoNp43-31KsvK5VJqibNwiewWIq-wc1sNezWLhTgaN4KWz5RljhLILY44KPspt-FPUSK")',
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-pink-500">
                  const <span className="text-blue-400">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-white">
                  name:{" "}
                  <span className="text-green-400">
                    &apos;Soumyajit Das&apos;
                  </span>
                  ,
                </p>
                <p className="pl-4 text-white">
                  skills: [
                  <span className="text-green-400">&apos;React&apos;</span>,{" "}
                  <span className="text-green-400">&apos;Node&apos;</span>],
                </p>
                <p className="pl-4 text-white">
                  hardWorker: <span className="text-purple-400">true</span>
                </p>
                <p className="text-pink-500">{"};"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
