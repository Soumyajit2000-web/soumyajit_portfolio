"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="py-24 bg-background-dark relative" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="w-full rounded-lg overflow-hidden border border-gray-800 bg-[#0c0c0c] shadow-2xl relative">
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-gray-500 font-mono">
                user@portfolio: ~/contact-form
              </div>
              <div className="w-10"></div>
            </div>
            <div className="p-6 md:p-10 font-mono text-sm md:text-base">
              <div className="text-green-500 mb-6">
                <span className="text-blue-400">➜</span>{" "}
                <span className="text-purple-400">~</span>{" "}
                <span className="text-gray-300">./initiate_contact.sh</span>
                <div className="text-gray-400 mt-2 text-xs">
                  Initializing secure connection... Connection established.
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="block text-gray-400 text-xs uppercase tracking-wider"
                      htmlFor="name"
                    >
                      &gt;&gt; Enter Name
                    </label>
                    <div className="relative group">
                      <span className="absolute left-3 top-2.5 text-primary text-lg">
                        &gt;
                      </span>
                      <input
                        className="w-full bg-[#050505] border border-gray-700 text-white pl-8 pr-4 py-2 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono placeholder-gray-700"
                        id="name"
                        placeholder="_"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-gray-400 text-xs uppercase tracking-wider"
                      htmlFor="email"
                    >
                      &gt;&gt; Enter Email
                    </label>
                    <div className="relative group">
                      <span className="absolute left-3 top-2.5 text-primary text-lg">
                        &gt;
                      </span>
                      <input
                        className="w-full bg-[#050505] border border-gray-700 text-white pl-8 pr-4 py-2 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono placeholder-gray-700"
                        id="email"
                        placeholder="_"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider"
                    htmlFor="message"
                  >
                    &gt;&gt; Enter Message
                  </label>
                  <div className="relative group">
                    <span className="absolute left-3 top-3 text-primary text-lg">
                      &gt;
                    </span>
                    <textarea
                      className="w-full bg-[#050505] border border-gray-700 text-white pl-8 pr-4 py-2 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono placeholder-gray-700 resize-none"
                      id="message"
                      placeholder="Type your message here..."
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-600 hidden sm:block">
                    <span className="animate-pulse">_</span> Awaiting input
                  </div>
                  <button
                    className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary rounded transition-all duration-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2 group cursor-pointer"
                    type="button"
                  >
                    <span>[ Execute Send ]</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
