import { BrainCircuit, Activity, ShieldCheck } from "lucide-react";

export default function QuizPreview() {
  return (
    <div className="relative group max-w-sm mx-auto animate-[fadeIn_0.5s_ease-out]">
      
      {/* Dynamic Glow Layer - This uses your --accent variable */}
      <div 
        className="absolute -inset-1 rounded-[2.5rem] opacity-30 group-hover:opacity-100 transition duration-500 blur-xl"
        style={{ backgroundColor: 'var(--accent)' }}
      ></div>

      {/* Main Card */}
      <div className="relative flex flex-col h-full p-8 rounded-[2rem] bg-[var(--bg)] border border-[var(--text)]/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
        
        {/* Animated Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50 animate-[pan_3s_linear_infinite]"></div>

        <div className="flex justify-between items-center mb-8">
          <div 
            className="p-3 rounded-2xl border border-[var(--text)]/10 shadow-inner"
            style={{ color: 'var(--accent)' }}
          >
            <BrainCircuit size={32} />
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold block">Engine Status</span>
            <span className="text-xs font-mono font-bold text-green-400">READY.01</span>
          </div>
        </div>

        <h4 className="text-2xl font-bold mb-3 tracking-tight">
          AI Quiz <span style={{ color: 'var(--accent)' }}>Engine</span>
        </h4>
        
        <p className="text-sm opacity-70 leading-relaxed mb-8">
          Adaptive learning algorithm that analyzes your performance to create 
          <span className="font-bold italic"> custom NEET pathways.</span>
        </p>

        {/* HUD Stats Table */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-3 rounded-xl bg-[var(--text)]/5 border border-[var(--text)]/5 flex flex-col gap-1">
            <Activity size={14} className="opacity-50" />
            <span className="text-[9px] uppercase font-bold opacity-40">Precision</span>
            <span className="text-sm font-mono font-bold">99.8%</span>
          </div>
          <div className="p-3 rounded-xl bg-[var(--text)]/5 border border-[var(--text)]/5 flex flex-col gap-1">
            <ShieldCheck size={14} className="opacity-50" />
            <span className="text-[9px] uppercase font-bold opacity-40">Security</span>
            <span className="text-sm font-mono font-bold">LOCKED</span>
          </div>
        </div>

        {/* Power Button */}
        <button 
          className="group/btn relative w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-300"
          style={{ 
            border: '1px solid var(--accent)',
            backgroundColor: 'transparent'
          }}
        >
          <div 
            className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0"
            style={{ backgroundColor: 'var(--accent)' }}
          ></div>
          
          <span className="relative z-10 group-hover/btn:text-[var(--bg)] transition-colors duration-300">
            Start Mock Test
          </span>
        </button>

      </div>

      {/* CSS Animation for the scanning line */}
      <style jsx>{`
        @keyframes pan {
          0% { transform: translateY(0) scaleX(0); opacity: 0; }
          50% { opacity: 0.5; transform: scaleX(1); }
          100% { transform: translateY(300px) scaleX(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}