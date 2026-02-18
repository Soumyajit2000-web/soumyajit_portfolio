import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white text-xl font-bold">
              <div className="size-6 rounded bg-primary flex items-center justify-center text-black">
                <span className="material-symbols-outlined text-sm">
                  terminal
                </span>
              </div>
              &lt;Soumyajit /&gt;
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
              Building the web, one component at a time. Open for freelance and
              full-time opportunities.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://github.com/Soumyajit2000-web"
              target="_blank"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#101e23] flex items-center justify-center text-gray-400 hover:text-primary hover:bg-[#101e23]/80 transition-all"
            >
              <span className="material-symbols-outlined">code</span>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#101e23] flex items-center justify-center text-gray-400 hover:text-primary hover:bg-[#101e23]/80 transition-all opacity-50 cursor-not-allowed"
            >
              <span className="material-symbols-outlined">work</span>
            </Link>
            <a
              href="mailto:soumyajitd2000@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-[#101e23] flex items-center justify-center text-gray-400 hover:text-primary hover:bg-[#101e23]/80 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Soumyajit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
