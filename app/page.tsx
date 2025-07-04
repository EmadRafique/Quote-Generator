import QuoteForm from "@/components/QuoteForm";
import { Moon, Star } from "lucide-react"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-white/30 animate-pulse">
          <Star size={24} />
        </div>
        <div className="absolute bottom-20 right-12 text-white/40 animate-ping">
          <Star size={18} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/20">
          <Star size={20} />
        </div>
        <div className="absolute bottom-10 left-1/3 text-white/25">
          <Star size={22} />
        </div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border border-white/20 transition-all duration-300 hover:scale-[1.01] hover:border-white/30">
        <div className="flex justify-center items-center gap-3 mb-6">
          <Moon className="text-yellow-300 animate-bounce" size={28} />
          <h1 className="text-3xl font-bold drop-shadow-md">
            Get Your Personalized Quote
          </h1>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
