import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X, ArrowRight, LayoutDashboard, Brain, BarChart3, Map } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Quiz", icon: <Brain size={18} /> },
    { name: "Analytics", icon: <BarChart3 size={18} /> },
    { name: "Roadmap", icon: <Map size={18} /> },
  ];

  return (
    <>
      
      <div className="h-20 md:h-24"></div>

      {/* Main Nav Wrapper - Fixed position with high Z-index */}
      <nav className="fixed top-0 left-0 w-full z-[999] p-3 md:p-5 pointer-events-none">
        <div
          className={`
            mx-auto max-w-6xl flex justify-between items-center
            rounded-2xl border transition-all duration-500 pointer-events-auto
            ${scrolled || menuOpen
              ? "py-3 px-5 bg-[var(--bg)]/90 backdrop-blur-2xl border-[var(--text)]/10 shadow-2xl" 
              : "py-5 px-8 bg-transparent border-transparent"
            }
          `}
        >
          {/* Logo */}
          <div className="z-[1001]">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-1 group">
              <span className="text-[var(--text)]">FUTURE </span>
              <span className="text-pink-500">.AI</span>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></div>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className="px-4 py-2 text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 hover:bg-[var(--text)]/5 rounded-xl transition-all"
              >
                {item.name}
              </button>
            ))}
            <div className="h-6 w-[1px] bg-[var(--text)]/10 mx-4"></div>
            <ThemeSwitcher />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2 z-[1001]">
            <ThemeSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-3 rounded-xl border transition-all duration-300 shadow-lg ${
                menuOpen ? "bg-pink-500 border-pink-400 text-white" : "bg-[var(--text)]/10 border-[var(--text)]/20 text-[var(--text)]"
              }`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Overlay - Full Screen & No Scroll */}
        <div 
          className={`
            fixed inset-0 bg-[var(--bg)]/98 backdrop-blur-3xl md:hidden transition-all duration-500 flex flex-col items-center justify-center p-8 z-[1000]
            ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
          `}
        >
          {/* Background Grid for Tech Feel */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
          </div>

          <div className="w-full max-w-xs space-y-4 relative z-10">
            {menuItems.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setMenuOpen(false)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border border-[var(--text)]/10 bg-[var(--text)]/5 transition-all active:scale-95
                ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500">{item.icon}</div>
                  <span className="text-lg font-bold tracking-tight text-[var(--text)]">{item.name}</span>
                </div>
                <ArrowRight size={18} className="opacity-30 text-[var(--text)]" />
              </button>
            ))}
            
            <button className="w-full mt-8 py-5 bg-pink-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(236,72,153,0.3)] active:scale-95 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}