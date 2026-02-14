import { 
  Cpu, 
  Search, 
  Zap, 
  Calendar, 
  Trophy, 
  LineChart, 
  HeartPulse, 
  Lock 
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    { name: "AI Adaptive Mock Tests", icon: <Cpu size={20} />, sub: "Neural difficulty scaling" },
    { name: "Weak Topic Detection", icon: <Search size={20} />, sub: "Precision error mapping" },
    { name: "Daily Motivation Engine", icon: <Zap size={20} />, sub: "Dopamine-driven focus" },
    { name: "Revision Planner", icon: <Calendar size={20} />, sub: "Spaced repetition logic" },
    { name: "Leaderboard Mode", icon: <Trophy size={20} />, sub: "Real-time peer metrics" },
    { name: "Performance Graphs", icon: <LineChart size={20} />, sub: "Visual progress tracking" },
    { name: "Stress Management", icon: <HeartPulse size={20} />, sub: "Cognitive load control" },
    { name: "Doctor Mode Unlock", icon: <Lock size={20} />, sub: "Premium module access" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header with technical sub-text */}
      <div className="text-center mb-16 space-y-3">
        <div className="flex justify-center items-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-[var(--accent)] opacity-50"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50" style={{ color: 'var(--accent)' }}>
              Protocol Status
            </span>
            <div className="h-[1px] w-8 bg-[var(--accent)] opacity-50"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
          Premium <span style={{ color: 'var(--accent)' }}>Modules</span>
        </h3>
        <p className="max-w-xl mx-auto text-sm opacity-50 font-medium">
          Advanced diagnostic tools designed to optimize cognitive performance for elite medical candidates.
        </p>
      </div>

      {/* Grid with Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-[var(--text)]/5 bg-[var(--text)]/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent)]/30 hover:bg-[var(--text)]/[0.06]"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 blur-3xl group-hover:opacity-[0.03] transition-opacity"></div>

            {/* Icon & Index */}
            <div className="flex justify-between items-start mb-6">
              <div 
                className="p-3 rounded-xl bg-[var(--text)]/5 transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]"
                style={{ color: 'var(--accent)' }}
              >
                {feature.icon}
              </div>
              <span className="text-[10px] font-mono opacity-20">0{index + 1}</span>
            </div>

            {/* Content */}
            <div className="space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-[var(--text)]">
                {feature.name}
              </h4>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter italic">
                {feature.sub}
              </p>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Bottom Accent */}
      <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--text)]/10 to-transparent"></div>
    </section>
  );
}