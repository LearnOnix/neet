import { TrendingUp, Activity, Microscope } from "lucide-react";

export default function Analytics() {
  const stats = [
    { subject: "Biology", score: 78, icon: <Microscope size={14} /> },
    { subject: "Chemistry", score: 65, icon: <Activity size={14} /> },
    { subject: "Physics", score: 59, icon: <TrendingUp size={14} /> },
  ];

  return (
    <div className="relative group max-w-sm mx-auto animate-[fadeIn_0.6s_ease-out]">
      
      {/* Dynamic Background Glow */}
      <div 
        className="absolute -inset-1 rounded-[2.5rem] opacity-20 group-hover:opacity-30 transition duration-500 blur-2xl"
        style={{ backgroundColor: 'var(--accent)' }}
      ></div>

      {/* Main Card */}
      <div className="relative p-7 rounded-[2rem] bg-[var(--bg)] border border-[var(--text)]/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
        
        {/* Header with Pulse */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h4 className="text-xl font-black tracking-tighter flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              LIVE DATA <span style={{ color: 'var(--accent)' }}>ANALYTICS</span>
            </h4>
            <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mt-1">
              Neural Processing Sync: 100%
            </p>
          </div>
          <div className="bg-[var(--text)]/5 p-2 rounded-lg border border-[var(--text)]/10">
             <TrendingUp size={20} style={{ color: 'var(--accent)' }} />
          </div>
        </div>

        {/* Subject Progress Bars */}
        <div className="space-y-6">
          {stats.map((item, index) => (
            <div key={item.subject} className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 opacity-80">
                  <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{item.subject}</span>
                </div>
                <span className="text-sm font-mono font-black" style={{ color: 'var(--accent)' }}>
                  {item.score}%
                </span>
              </div>
              
              {/* Outer Bar */}
              <div className="h-1.5 w-full bg-[var(--text)]/5 rounded-full overflow-hidden border border-[var(--text)]/5">
                {/* Inner Animated Bar */}
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_var(--accent)]"
                  style={{ 
                    width: `${item.score}%`, 
                    backgroundColor: 'var(--accent)',
                    boxShadow: `0 0 12px var(--accent)`
                  }}
                >
                  {/* Scanning Light Effect on Bar */}
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats Overlay */}
        <div className="mt-8 pt-6 border-t border-[var(--text)]/5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold opacity-40">Overall Readiness</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black tracking-tighter">67.3</span>
              <span className="text-[10px] font-bold text-green-500">+2.4%</span>
            </div>
          </div>
          <button className="text-[9px] font-black uppercase tracking-[0.2em] border border-[var(--text)]/20 px-3 py-2 rounded-lg hover:bg-[var(--text)]/10 transition-colors">
            Full Report
          </button>
        </div>

        {/* Decorative HUD Lines */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor">
            <path d="M0 10h40M30 0v40" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}