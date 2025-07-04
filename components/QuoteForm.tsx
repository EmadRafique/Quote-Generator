"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quotesData = [
  // Life
  { topic: "life", quote: "Life is what happens when you are busy making other plans." },
  { topic: "life", quote: "Life is short. Smile while you still have teeth." },
  { topic: "life", quote: "The purpose of life is a life of purpose." },

  // Success
  { topic: "success", quote: "Success usually comes to those who are too busy to be looking for it." },
  { topic: "success", quote: "Success is not in what you have, but who you are." },
  { topic: "success", quote: "Success is walking from failure to failure with no loss of enthusiasm." },

  // Love
  { topic: "love", quote: "Love is not something you find. Love is something that finds you." },
  { topic: "love", quote: "To love and be loved is to feel the sun from both sides." },
  { topic: "love", quote: "Where there is love, there is life." },

  // Travel
  { topic: "travel", quote: "Travel is the only thing you buy that makes you richer." },
  { topic: "travel", quote: "The world is a book and those who do not travel read only one page." },
  { topic: "travel", quote: "Take only memories, leave only footprints." },

  // Sports
  { topic: "sports", quote: "Champions keep playing until they get it right." },
  { topic: "sports", quote: "Winning means you are willing to go longer, work harder, and give more." },
  { topic: "sports", quote: "Hard work beats talent when talent does not work hard." },

  // Dreams
  { topic: "dreams", quote: "All our dreams can come true if we have the courage to pursue them." },
  { topic: "dreams", quote: "Dream big. Dare bigger." },
  { topic: "dreams", quote: "Chase your dreams like your life depends on it." },

  // Failure
  { topic: "failure", quote: "Failure is simply the opportunity to begin again, this time more intelligently." },
  { topic: "failure", quote: "Do not fear failure. Fear being in the exact same place next year." },
  { topic: "failure", quote: "Every failure is a step closer to success." },

  // Courage
  { topic: "courage", quote: "Courage is not the absence of fear, but the triumph over it." },
  { topic: "courage", quote: "You gain strength, courage, and confidence by every experience." },
  { topic: "courage", quote: "Be bold. Be brave. Be fearless." },

  // Patience
  { topic: "patience", quote: "Patience is not the ability to wait, but to keep a good attitude while waiting." },
  { topic: "patience", quote: "Great things take time. Be patient." },
  { topic: "patience", quote: "Patience is bitter, but its fruit is sweet." },

  // Mindfulness
  { topic: "mindfulness", quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." },
  { topic: "mindfulness", quote: "Mindfulness is a way of befriending ourselves and our experience." },
  { topic: "mindfulness", quote: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor." },

  // Creativity
  { topic: "creativity", quote: "Creativity is intelligence having fun." },
  { topic: "creativity", quote: "You cannot use up creativity. The more you use, the more you have." },
  { topic: "creativity", quote: "The creative adult is the child who survived." },

  // Resilience
  { topic: "resilience", quote: "Resilience is knowing that you are the only one that has the power to pick yourself up." },
  { topic: "resilience", quote: "It is not the strongest or most intelligent who survive, but those most adaptable to change." },
  { topic: "resilience", quote: "Fall seven times, stand up eight." },

  // Time
  { topic: "time", quote: "Lost time is never found again." },
  { topic: "time", quote: "Time is what we want most, but what we use worst." },
  { topic: "time", quote: "The key is in not spending time, but in investing it." },

  // Kindness
  { topic: "kindness", quote: "Kindness is a language the deaf can hear and the blind can see." },
  { topic: "kindness", quote: "No act of kindness, no matter how small, is ever wasted." },
  { topic: "kindness", quote: "Be kind whenever possible. It is always possible." },
];

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const matchingQuotes = quotesData
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.quote);

    setQuotes(matchingQuotes);
  };

  return (
    <div className="max-w-xl w-full bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-white/30 transition-all hover:scale-[1.01]">
      <h2 className="text-3xl font-bold text-white text-center drop-shadow">
        ✨ Get 3 Inspiring Quotes
      </h2>
      <Input
        placeholder="Type a topic e.g. love, resilience, mindfulness..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="bg-white/80 rounded-xl placeholder:text-gray-500"
      />
      <Button
        onClick={handleSubmit}
        className="w-full hover:scale-[1.02] transition-transform duration-200"
      >
        Get Quotes
      </Button>

      <ul className="space-y-2 text-white/90">
        {quotes.length > 0 ? (
          quotes.map((q, idx) => (
            <li
              key={idx}
              className="bg-white/10 p-3 rounded-md border border-white/10 shadow-sm backdrop-blur-sm"
            >
              • {q}
            </li>
          ))
        ) : (
          <li className="text-sm text-white/60 text-center">
            No quotes yet — try topics like &quot;dreams&quot;, &quot;resilience&quot;, &quot;kindness&quot;
          </li>
        )}
      </ul>
    </div>
  );
}
