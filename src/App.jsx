import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Dashboard from "./components/Dashboard";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Roadmap from "./pages/Roadmap";
export default function App() {
  return (
    <div className="min-h-screen transition-all duration-500">
      <Router>
        <Routes>
          {/* Use a Fragment <> </> to wrap multiple components in a single route */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Countdown targetDate="2026-05-03" />
              <Dashboard />
              <FeatureGrid />
              <Footer />
            </>
          } />
          
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/roadmap" element={<Roadmap />} />
          
        </Routes>
      </Router>
    </div>
  );
}