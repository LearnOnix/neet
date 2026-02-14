import { useEffect, useState } from "react";

const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "Future doctors don’t quit.",
  "Every MCQ solved is one step closer to your dream.",
  "Hard work beats talent when talent doesn’t work hard.",
  "You are stronger than your doubts."
];

export default function MotivationalQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center max-w-md">
      <h3 className="text-xl font-semibold mb-3">🌟 Daily Motivation</h3>
      <p className="italic">"{quote}"</p>
    </div>
  );
}
