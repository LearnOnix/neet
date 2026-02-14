import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Dashboard from "./components/Dashboard";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen transition-all duration-500">
      <Navbar />
      <Hero />
      <Countdown targetDate="2026-05-03" />
      <Dashboard />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
