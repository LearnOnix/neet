import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { 
  Palette, 
  ChevronDown, 
  Sun, 
  Moon, 
  Zap, 
  Sparkles, 
  Orbit 
} from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Futuristic Label Mapping
  const themes = [
    { name: "light", label: "LIGHT MODE", sub: "Standard Vision", icon: <Sun size={16} /> },
    { name: "dark", label: "DARK VOID", sub: "Deep Space UI", icon: <Moon size={16} /> },
    { name: "purple", label: "NEBULA", sub: "Purple Glow", icon: <Orbit size={16} /> },
    { name: "pink", label: "PRISM", sub: "Glassmorphism", icon: <Sparkles size={16} /> },
    { name: "neon", label: "CYBERPUNK", sub: "High Contrast", icon: <Zap size={16} /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* 🚀 The "Command" Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-5 py-2.5 rounded-xl 
        bg-[var(--text)]/5 backdrop-blur-2xl
        border border-[var(--text)]/10 
        text-[var(--text)] transition-all duration-300 active:scale-95 shadow-xl"
      >
        <div className="relative flex items-center justify-center">
            <Palette size={18} style={{ color: 'var(--accent)' }} />
            <span className="absolute inset-0 bg-[var(--accent)] blur-lg opacity-20"></span>
        </div>
        
        <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Interface</span>
            <span className="text-[9px] font-mono opacity-40 uppercase tracking-tighter">Theme.config</span>
        </div>
        
        <ChevronDown size={14} className={`transition-transform duration-500 opacity-40 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* 📱 The "Floating HUD" Dropdown */}
      {open && (
        <div className="absolute right-0 mt-4 w-60 
        rounded-2xl overflow-hidden z-[1000]
        bg-[var(--bg)]/95 backdrop-blur-3xl 
        border border-[var(--text)]/10 
        shadow-[0_25px_60px_rgba(0,0,0,0.5)]
        animate-[fadeIn_0.2s_ease-out]">
          
          <div className="p-2 space-y-1">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setOpen(false);
                }}
                className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl
                transition-all duration-200 group relative overflow-hidden
                ${theme === t.name 
                  ? "bg-[var(--text)] text-[var(--bg)]" 
                  : "hover:bg-[var(--text)]/5 text-[var(--text)]"}`}
              >
                {/* Icon with glow effect on selection */}
                <div className={`${theme === t.name ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                    {t.icon}
                </div>

                <div className="flex flex-col items-start leading-none">
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    {t.label}
                  </span>
                  <span className={`text-[8px] font-bold mt-1 uppercase tracking-tighter 
                    ${theme === t.name ? "opacity-60" : "opacity-30"}`}>
                    {t.sub}
                  </span>
                </div>

                {/* Selection Indicator */}
                {theme === t.name && (
                    <div className="absolute right-4 w-1 h-4 rounded-full bg-[var(--bg)]/50"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Decorative Bottom Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30"></div>
        </div>
      )}
    </div>
  );
}