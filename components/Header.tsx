import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-noir-glass border-b border-gray-200/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-300">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            &lt;Soumyajit /&gt;
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Work", "About", "Journey", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex h-9 px-4 items-center justify-center rounded-lg border border-primary/50 text-primary text-sm font-bold hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-[0_0_10px_rgba(13,185,242,0.1)] hover:shadow-[0_0_20px_rgba(13,185,242,0.4)] cursor-pointer">
            Hire Me
          </button>
          <button className="md:hidden text-white cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
