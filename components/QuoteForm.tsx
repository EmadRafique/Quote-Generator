"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quotesData = [
  // Life
  { topic: "life", quote: "Life is what happens when you're busy making other plans." },
  { topic: "life", quote: "Life is short. Smile while you still have teeth." },
  { topic: "life", quote: "The purpose of life is a life of purpose." },

  // Success
  { topic: "success", quote: "Success usually comes to those who are too busy to be looking for it." },
  { topic: "success", quote: "Success is not in what you have, but who you are." },
  { topic: "success", quote: "Success is walking from failure to failure with no loss of enthusiasm." },

  // Love
  { topic: "love", quote: "Love isn't something you find. Love is something that finds you." },
  { topic: "love", quote: "To love and be loved is to feel the sun from both sides." },
  { topic: "love", quote: "Where there is love, there is life." },

  // Travel
  { topic: "travel", quote: "Travel is the only thing you buy that makes you richer." },
  { topic: "travel", quote: "The world is a book and those who do not travel read only one page." },
  { topic: "travel", quote: "Take only memories, leave only footprints." },

  // Sports
  { topic: "sports", quote: "Champions keep playing until they get it right." },
  { topic: "sports", quote: "Winning means you're willing to go longer, work harder, and give more." },
  { topic: "sports", quote: "Hard work beats talent when talent doesn't work hard." },

  // Dreams
  { topic: "dreams", quote: "All our dreams can come true if we have the courage to pursue them." },
  { topic: "dreams", quote: "Dream big. Dare bigger." },
  { topic: "dreams", quote: "Chase your dreams like your life depends on it." },

  // Failure
  { topic: "failure", quote: "Failure is simply the opportunity to begin again, this time more intelligently." },
  { topic: "failure", quote: "Don't fear failure. Fear being in the exact same place next year." },
  { topic: "failure", quote: "Every failure is a step closer to success." },

  // Courage
  { topic: "courage", quote: "Courage is not the absence of fear, but the triumph over it." },
  { topic: "courage", quote: "You gain strength, courage, and confidence by every experience." },
  { topic: "courage", quote: "Be bold. Be brave. Be fearless." },

  // Patience
  { topic: "patience", quote: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting." },
  { topic: "patience", quote: "Great things take time. Be patient." },
  { topic: "patience", quote: "Patience is bitter, but its fruit is sweet." },
];

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const matchingQuotes = quotesData
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.quote);

    setQuotes(matchingQuotes);
  };

  return (
    <div className="max-w-xl w-full bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-white/30 transition-all hover:scale-[1.01]">
      <h2 className="text-3xl font-bold text-white text-center drop-shadow">✨ Get 3 Inspiring Quotes</h2>
      <Input
        placeholder="Type a topic e.g. love, courage, travel..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="bg-white/80 rounded-xl placeholder:text-gray-500"
      />
      <Button className="w-full" onClick={handleSubmit}>
        Get Quotes
      </Button>

      <ul className="space-y-2 text-white/90">
        {quotes.length > 0 ? (
          quotes.map((q, idx) => (
            <li key={idx} className="bg-white/10 p-3 rounded-md border border-white/10 shadow-sm backdrop-blur-sm">
              • {q}
            </li>
          ))
        ) : (
          <li className="text-sm text-white/60 text-center">No quotes yet — try topics like "dreams", "travel", "sports"</li>
        )}
      </ul>
    </div>
  );
}
