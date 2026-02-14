import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  const backgrounds = {
    light: "https://files.idyllic.app/files/static/3317137?width=256&optimizer=image",
    dark: "https://images.stockcake.com/public/8/b/4/8b4dbf86-dfd2-4b00-ae09-02f39ca1622e_large/digital-healthcare-guardian-stockcake.jpg",
    neon: "https://pics.craiyon.com/2023-07-05/f673d3c4692c4108a9d6993424fa5f26.webp",
    pink: "https://images.stockcake.com/public/8/b/4/8b4bb21f-b582-4c1c-a73f-7ad47c14cd59_medium/healthcare-anime-illustration-stockcake.jpg",
    purple: "https://pics.craiyon.com/2023-07-05/f673d3c4692c4108a9d6993424fa5f26.webp",
  };

  // Define accent colors based on theme for the "glow" effect
  const accents = {
    light: "from-blue-400/20",
    dark: "from-blue-600/30",
    neon: "from-green-500/40",
    pink: "from-pink-500/40",
    purple: "from-purple-600/40",
  };

  return (
    <div className="relative mx-4 mt-6 h-[50vh] md:h-[60vh] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
      
      {/* Background Image with slow zoom-in effect */}
      <div
        className="absolute inset-0 transition-transform duration-[10s] ease-out scale-110 hover:scale-100"
        style={{
          backgroundImage: `url(${backgrounds[theme]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Futuristic Multi-layer Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${accents[theme]} via-black/60 to-black/80`}></div>
      
      {/* Decorative Grid Pattern (SVG) */}
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        
        {/* Glassmorphism Badge */}
        <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md animate-bounce-slow">
          <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 shadow-[0_0_8px_#4ade80]"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
            Next-Gen Platform
          </span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
          Welcome to <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
            FutureDoctor
          </span>
        </h1>

        {/* Description with thin glow line */}
        <div className="mt-6 flex flex-col items-center">
          <p className="max-w-lg text-base font-medium text-gray-300 md:text-xl">
            AI Powered Medical Learning for the 
            <span className="text-white font-bold italic ml-1 underline decoration-cyan-500/50 underline-offset-4">Modern Student</span>
          </p>
          
          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get Started
            </button>
            <button className="rounded-xl border border-white/30 bg-white/5 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Corner Accents for "Advanced" look */}
      <div className="absolute top-8 left-8 h-8 w-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute bottom-8 right-8 h-8 w-8 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
    </div>
  );
}