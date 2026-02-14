import { CheckCircle2, Circle, Map, Rocket } from "lucide-react";

export default function Roadmap() {
  const tasks = [
    { title: "Biology Revision", status: "complete", desc: "Genetics & Evolution" },
    { title: "Organic Chemistry", status: "complete", desc: "Hydrocarbons Practice" },
    { title: "Physics Mock Test", status: "pending", desc: "Full-Length Paper 01" },
  ];

  return (
    <div className="relative group overflow-hidden rounded-[2rem] border border-[var(--text)]/10 bg-[var(--text)]/5 backdrop-blur-md p-6 transition-all hover:bg-[var(--text)]/[0.08]">
      
      {/* Dynamic Background Glow */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-25 transition-opacity" style={{ backgroundColor: 'var(--accent)' }}></div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-[var(--accent)]/10" style={{ color: 'var(--accent)' }}>
          <Map size={22} />
        </div>
        <div>
          <h4 className="font-bold tracking-tight text-lg uppercase tracking-widest">Smart Roadmap</h4>
          <p className="text-[10px] font-bold opacity-40 uppercase">Phase 02: Mastery</p>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative space-y-6 ml-2">
        {/* The Vertical Connecting Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[1.5px] bg-[var(--text)]/10"></div>

        {tasks.map((task, index) => (
          <div key={index} className="relative flex gap-4 items-start group/item">
            {/* Status Icon Node */}
            <div className="relative z-10 mt-1">
              {task.status === "complete" ? (
                <div className="bg-[var(--bg)] rounded-full">
                  <CheckCircle2 size={24} style={{ color: 'var(--accent)' }} className="drop-shadow-[0_0_8px_var(--accent)]" />
                </div>
              ) : (
                <div className="bg-[var(--bg)] rounded-full p-[2px]">
                  <Circle size={20} className="opacity-30 text-[var(--text)]" />
                </div>
              )}
            </div>

            {/* Task Details */}
            <div className={`flex flex-col ${task.status === "pending" ? "opacity-40" : "opacity-100"}`}>
              <span className="text-sm font-black tracking-tight">{task.title}</span>
              <span className="text-[10px] font-medium opacity-60 uppercase tracking-wider">{task.desc}</span>
            </div>

            {/* Current Indicator for Pending Task */}
            {task.status === "pending" && (
              <div className="absolute left-[-30px] w-full h-full bg-[var(--accent)]/5 rounded-xl border-l-2 border-[var(--accent)] -z-10 animate-[pulse_2s_infinite]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-[var(--text)]/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket size={14} className="opacity-50" />
          <span className="text-[10px] font-bold opacity-40 uppercase">Next: Inorganic Chem</span>
        </div>
        <div className="text-[10px] font-black" style={{ color: 'var(--accent)' }}>66% TOTAL</div>
      </div>
    </div>
  );
}