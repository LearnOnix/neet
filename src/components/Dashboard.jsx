import QuizPreview from "./QuizPreview";
import Analytics from "./Analytics";
import StreakTracker from "./StreakTracker";
import Roadmap from "./Roadmap";

export default function Dashboard() {
  return (
    <section className="px-6 py-16 grid md:grid-cols-2 gap-10">
      <QuizPreview />
      <Analytics />
      <StreakTracker />
      <Roadmap />
    </section>
  );
}
