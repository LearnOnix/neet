export default function MessageCard() {
  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg text-center hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold mb-4">
        💌 A Small Message
      </h3>

      <p className="text-lg leading-relaxed">
        Your dedication and consistency inspire me.
        I truly believe you’ll become an amazing doctor someday.
        Keep shining, keep studying, and don’t forget to take care of yourself too. 🌸
      </p>

      <p className="mt-6 font-semibold">
        — Someone who believes in you ✨
      </p>
    </div>
  );
}
