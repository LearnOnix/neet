import { ShieldCheck, Cpu, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = ["System Status", "Privacy Protocol", "Research API", "Neural Support"];

  return (
    <footer className="relative mt-20 border-t border-[var(--text)]/10 bg-[var(--bg)] overflow-hidden">
      {/* 1. Subtle Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--text) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Identity & Status */}
          <div className="space-y-4">
            <h1 className="text-xl font-black tracking-tighter uppercase italic">
              Future<span className="text-pink-500">Doctor.ai</span>
            </h1>
            <p className="text-[10px] font-bold opacity-40 uppercase leading-relaxed tracking-widest max-w-[250px]">
              Advanced Cognitive Diagnostic Interface for Medical Aspirants. System v4.0.2 Deployment.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[8px] font-black text-green-500 uppercase">Server: Optimal</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[var(--text)]/5 border border-[var(--text)]/10 rounded-md">
                <Cpu size={10} className="opacity-40" />
                <span className="text-[8px] font-black opacity-40 uppercase">Latency: 14ms</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Protocol */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black opacity-20 uppercase tracking-[0.3em] mb-2">Navigation Protocols</span>
            <div className="grid grid-cols-2 gap-y-2">
              {links.map((link) => (
                <button 
                  key={link} 
                  className="group flex items-center gap-1 text-[11px] font-bold opacity-60 hover:opacity-100 transition-all text-left"
                >
                  <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Global Access & Security */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <span className="text-[10px] font-black opacity-20 uppercase tracking-[0.3em]">Encrypted Access</span>
            <div className="flex items-center gap-4">
              <ShieldCheck size={20} className="opacity-40" />
              <Globe size={20} className="opacity-40" />
            </div>
            <p className="text-[9px] font-mono opacity-30 uppercase max-w-[200px]">
              End-to-end data encryption active. Global nodes connected via decentralized neural-link.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--text)]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">
            © {currentYear} FUTURE DOCTOR. <span className="hidden md:inline">|</span> 
            <span className="mx-2 italic">ENGINEERED FOR EXCELLENCE</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="h-1 w-24 bg-[var(--text)]/5 rounded-full overflow-hidden">
               <div className="h-full w-1/3 bg-pink-500/50 animate-[shimmer_3s_infinite]"></div>
            </div>
            <span className="text-[10px] font-black opacity-40">STABLE_REL_04</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </footer>
  );
}