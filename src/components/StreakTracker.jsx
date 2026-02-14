import { Flame, Trophy, Calendar } from "lucide-react";

export default function StreakTracker() {
  // पिछले 7 दिनों का डेटा (Dummy)
  const activity = [true, true, true, false, true, true, true];

  return (
    <div className="relative group overflow-hidden rounded-[2rem] border border-[var(--text)]/10 bg-[var(--text)]/5 backdrop-blur-md p-6 transition-all hover:bg-[var(--text)]/[0.08]">
      
      {/* Dynamic Glow Accent - कोनों में हल्का सा निखार */}
      <div className="absolute -top-12 -left-12 w-32 h-32 blur-[60px] opacity-15 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: 'var(--accent)' }}></div>

      {/* Header Area */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--accent)]/10" style={{ color: 'var(--accent)' }}>
            <Flame size={22} className={activity[6] ? "animate-pulse" : ""} />
          </div>
          <div>
            <h4 className="font-bold tracking-tight text-lg uppercase tracking-widest">Study Streak</h4>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Consistency Protocol</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[var(--text)]/5 px-3 py-1 rounded-full border border-[var(--text)]/10">
          <Trophy size={12} style={{ color: 'var(--accent)' }} />
          <span className="text-[10px] font-black uppercase">Level 4</span>
        </div>
      </div>

      {/* Streak Value */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter italic" style={{ color: 'var(--text)' }}>12</span>
          <span className="text-sm font-bold opacity-50 uppercase tracking-widest">Days</span>
        </div>
        <div className="h-1 w-full bg-[var(--text)]/5 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full transition-all duration-1000 shadow-[0_0_10px_var(--accent)]" 
            style={{ width: `70%`, backgroundColor: 'var(--accent)' }}
          ></div>
        </div>
      </div>

      {/* Visual Activity Grid - GitHub Style */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-[9px] font-bold opacity-40 uppercase tracking-widest">
          <span>Recent Activity</span>
          <span>Week 02</span>
        </div>
        <div className="flex justify-between gap-2">
          {activity.map((active, i) => (
            <div 
              key={i}
              className={`flex-1 h-6 rounded-md border border-[var(--text)]/5 transition-all duration-500 ${
                active 
                ? "shadow-[0_0_12px_var(--accent)] opacity-100" 
                : "opacity-20 bg-transparent"
              }`}
              style={{ backgroundColor: active ? 'var(--accent)' : 'transparent' }}
            ></div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-[10px] opacity-50 mt-6 leading-relaxed flex items-center gap-2">
        <Calendar size={10} />
        Keep consistency to unlock <span className="text-[var(--text)] font-bold">Premium Modules.</span>
      </p>
    </div>
  );
}