import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, BookOpen, BarChart3, Zap, Clock, ShieldCheck } from "lucide-react";
import ThemeSwitcher from "../components/ThemeSwitcher";

const roadmapData = [
  {
    phase: "Phase 1: The High-Yield Blitz",
    duration: "Feb 16 – March 15",
    focus: "80/20 Rule: Master 80% of marks from 20% effort chapters.",
    color: "from-emerald-600/20 to-cyan-600/20",
    subjects: [
      {
        name: "Physics",
        icon: <Zap size={18} className="text-emerald-400" />,
        topics: ["Modern Physics", "Semiconductors", "Current Electricity", "Ray Optics", "Unit & Dimensions"]
      },
      {
        name: "Chemistry",
        icon: <Target size={18} className="text-cyan-400" />,
        topics: ["Chemical Bonding", "Organic: Name Reactions", "p-Block Elements", "Coordination Compounds", "Solutions"]
      },
      {
        name: "Biology",
        icon: <BookOpen size={18} className="text-teal-400" />,
        topics: ["Genetics & Evolution", "Biotech: Principles", "Human Physiology", "Cell Biology", "Ecology"]
      }
    ]
  },
  {
    phase: "Phase 2: The Combat Zone",
    duration: "March 16 – April 15",
    focus: "Complexity Scaling & Full-Syllabus OMR Practice.",
    color: "from-amber-500/20 to-orange-600/20",
    subjects: [
      {
        name: "Physics",
        icon: <Zap size={18} className="text-amber-400" />,
        topics: ["Mechanics Revision", "Thermodynamics", "Electrostatics", "Waves & SHM", "Formula Marathon"]
      },
      {
        name: "Chemistry",
        icon: <Target size={18} className="text-orange-400" />,
        topics: ["Ionic Equilibrium", "Hydrocarbons", "Inorganic NCERT Ratification", "Electrochemistry", "Redox"]
      },
      {
        name: "Testing",
        icon: <BarChart3 size={18} className="text-red-400" />,
        topics: ["3 Part-Tests / Week", "2 Full Mocks / Week", "2PM - 5:20PM Test Timing", "Error Log Mastery"]
      }
    ]
  },
  {
    phase: "Phase 3: The Ultimate Sprint",
    duration: "April 16 – May 2",
    focus: "Mental Priming & 100% NCERT Immersion.",
    color: "from-red-600/20 to-purple-700/20",
    subjects: [
      {
        name: "Biology",
        icon: <BookOpen size={18} className="text-red-400" />,
        topics: ["Full NCERT Line-by-Line", "Diagram Review", "Example Memorization", "Plant Physiology"]
      },
      {
        name: "Strategy",
        icon: <ShieldCheck size={18} className="text-purple-400" />,
        topics: ["Daily Full-Syllabus Mock", "PYQ Marathon (2020-2025)", "Flashcard Revision", "Sleep Cycle Fix"]
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
};

export default function NeetRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-red-500/30">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <header className="flex justify-between items-center mb-12">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={18} /> Exit Strategy
          </motion.button>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold animate-pulse">
              75 DAYS REMAINING
            </div>
            <ThemeSwitcher />
          </div>
        </header>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
            CRACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">NEET 2026</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-60 max-w-3xl font-medium leading-relaxed">
            The 75-Day War Plan. No backlogs, no excuses. 
            Just high-yield topics and relentless testing.
          </p>
        </motion.div>

        {/* The Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {roadmapData.map((phase, idx) => (
            <motion.section 
              key={idx} 
              variants={itemVariants}
              className={`p-1 w-full rounded-[2.5rem] bg-gradient-to-br ${phase.color} border border-white/5`}
            >
              <div className="bg-[var(--bg)]/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2.3rem] h-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-2">
                      <Clock size={16} />
                      <span className="text-xs font-black uppercase tracking-widest">{phase.duration}</span>
                    </div>
                    <h2 className="text-3xl font-bold">{phase.phase}</h2>
                  </div>
                  <div className="max-w-xs text-sm opacity-70 border-l-2 border-red-500 pl-4 py-1 italic">
                    {phase.focus}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {phase.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                          {sub.icon}
                        </div>
                        <h3 className="font-bold">{sub.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {sub.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="text-sm opacity-60 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-current" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-16 p-8 md:p-16 rounded-[3rem] bg-gradient-to-r from-red-600 to-orange-600 text-white text-center shadow-2xl shadow-red-500/20"
        >
          <h2 className="text-4xl font-black mb-4">Fortune Favors the Brave.</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            75 days is enough to change your life. Start the 14-hour grind today.
          </p>
          <button className="px-10 py-4 bg-white text-red-600 rounded-full font-black text-lg hover:shadow-xl hover:scale-105 transition-all">
            Download Daily Schedule (PDF)
          </button>
        </motion.div>
      </div>
    </div>
  );
}